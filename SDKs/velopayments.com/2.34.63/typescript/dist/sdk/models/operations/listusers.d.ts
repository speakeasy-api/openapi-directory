import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
export declare class ListUsersRequest extends SpeakeasyBase {
    /**
     * The entityId of the User.
     */
    entityId?: string;
    /**
     * Page number. Default is 1.
     */
    page?: number;
    /**
     * The number of results to return in a page
     */
    pageSize?: number;
    /**
     * The Type of the Payee entity. Either COMPANY or INDIVIDUAL.
     */
    payeeType?: shared.PayeeTypeEnum;
    /**
     * List of sort fields (e.g. ?sort=email:asc,lastName:asc)
     *
     * @remarks
     * Default is email:asc 'name'
     * The supported sort fields are - email, lastNmae.
     *
     */
    sort?: string;
    /**
     * The status of the User.
     */
    status?: shared.UserStatusEnum;
    /**
     * The Type of the User.
     */
    type?: shared.UserTypeEnum;
}
export declare class ListUsersResponse extends SpeakeasyBase {
    contentType: string;
    /**
     * Paginated list of Users filtered by query parameters
     */
    pagedUserResponse?: shared.PagedUserResponse;
    statusCode: number;
    rawResponse?: AxiosResponse;
    /**
     * Invalid request. See Error message payload for details of failure
     */
    inlineResponse400?: shared.InlineResponse400;
    /**
     * Invalid access token. May be expired or invalid
     */
    inlineResponse401?: shared.InlineResponse401;
    /**
     * The authentication does not have permissions to access the resource
     *
     * @remarks
     * This usually occurs when there is a valid authentication instance (client or user) but they do not have the required permissions
     *
     */
    inlineResponse403?: shared.InlineResponse403;
}
