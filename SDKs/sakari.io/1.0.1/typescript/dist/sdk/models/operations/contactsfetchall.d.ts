import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
export declare class ContactsFetchAllSecurity extends SpeakeasyBase {
    sakariAuth: string;
}
export declare class ContactsFetchAllRequest extends SpeakeasyBase {
    /**
     * Account to apply operations to
     */
    accountId: string;
    /**
     * Filter by email or part of
     */
    email?: string;
    /**
     * Filter by first name or part of
     */
    firstName?: string;
    /**
     * Filter by last name or part of
     */
    lastName?: string;
    /**
     * Maximum number of results to return
     */
    limit?: number;
    /**
     * Filter by mobile or part of
     */
    mobile?: string;
    /**
     * Results to skip when paginating through a result set
     */
    offset?: number;
    /**
     * Filter by tag(s)
     */
    tags?: string;
}
export declare class ContactsFetchAllResponse extends SpeakeasyBase {
    /**
     * successful operation
     */
    contactsResponse?: shared.ContactsResponse;
    contentType: string;
    /**
     * invalid request
     */
    errorResponse?: shared.ErrorResponse;
    statusCode: number;
    rawResponse?: AxiosResponse;
}
