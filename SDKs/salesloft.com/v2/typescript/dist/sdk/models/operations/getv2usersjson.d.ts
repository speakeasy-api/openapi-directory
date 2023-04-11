import { SpeakeasyBase } from "../../../internal/utils";
import { AxiosResponse } from "axios";
export declare class GetV2UsersJsonRequest extends SpeakeasyBase {
    /**
     * Filters users based on active attribute. Defaults to not applied
     */
    active?: boolean;
    /**
     * Filters users by group_id.  An additional value of "_is_null" can be passed to filter users that are not in a group
     */
    groupId?: string[];
    /**
     * Filters list to only include guids
     */
    guid?: string[];
    /**
     * Filters users based on if they have a crm user mapped or not.
     */
    hasCrmUser?: boolean;
    /**
     * IDs of users to fetch. If a record can't be found, that record won't be returned and your request will be successful
     */
    ids?: number[];
    /**
     * Whether to include total_pages and total_count in the metadata. Defaults to false
     */
    includePagingCounts?: boolean;
    /**
     * The current page to fetch users from. Defaults to returning all users
     */
    page?: number;
    /**
     * How many users to show per page in the range [1, 100]. Defaults to 25.  Results are only paginated if the page parameter is defined
     */
    perPage?: number;
    /**
     * Filters users by role_id
     */
    roleId?: string[];
    /**
     * Space-separated list of keywords used to find case-insensitive substring matches against First Name, Last Name, or Email
     */
    search?: string;
    /**
     * Key to sort on, must be one of: id, email, name, group, role. Defaults to id
     */
    sortBy?: string;
    /**
     * Direction to sort in, must be one of: ASC, DESC. Defaults to DESC
     */
    sortDirection?: string;
    /**
     * Defaults to true.
     *
     * @remarks
     *
     * When true, only shows users that are actionable based on the team's privacy settings.
     * When false, shows all users on the team, even if you can't take action on that user. Deactivated users are also included when false.
     *
     */
    visibleOnly?: boolean;
    /**
     * Filters users based on assigned work_country.
     */
    workCountry?: string[];
}
export declare class GetV2UsersJsonResponse extends SpeakeasyBase {
    body?: Uint8Array;
    contentType: string;
    statusCode: number;
    rawResponse?: AxiosResponse;
}
