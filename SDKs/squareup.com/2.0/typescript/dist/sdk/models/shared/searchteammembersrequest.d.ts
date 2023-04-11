import { SpeakeasyBase } from "../../../internal/utils";
import { SearchTeamMembersQuery } from "./searchteammembersquery";
/**
 * Represents a search request for a filtered list of `TeamMember` objects.
 */
export declare class SearchTeamMembersRequest extends SpeakeasyBase {
    /**
     * The opaque cursor for fetching the next page. For more information, see
     *
     * @remarks
     * [pagination](https://developer.squareup.com/docs/working-with-apis/pagination).
     */
    cursor?: string;
    /**
     * The maximum number of `TeamMember` objects in a page (100 by default).
     */
    limit?: number;
    /**
     * Represents the parameters in a search for `TeamMember` objects.
     */
    query?: SearchTeamMembersQuery;
}
