import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
export declare class AdminCustomersChromePrintersListSecurityOption1 extends SpeakeasyBase {
    oauth2: string;
    oauth2c: string;
}
export declare class AdminCustomersChromePrintersListSecurityOption2 extends SpeakeasyBase {
    oauth2: string;
    oauth2c: string;
}
export declare class AdminCustomersChromePrintersListSecurity extends SpeakeasyBase {
    option1?: AdminCustomersChromePrintersListSecurityOption1;
    option2?: AdminCustomersChromePrintersListSecurityOption2;
}
export declare class AdminCustomersChromePrintersListRequest extends SpeakeasyBase {
    /**
     * V1 error format.
     */
    dollarXgafv?: shared.XgafvEnum;
    /**
     * OAuth access token.
     */
    accessToken?: string;
    /**
     * Data format for response.
     */
    alt?: shared.AltEnum;
    /**
     * JSONP
     */
    callback?: string;
    /**
     * Selector specifying which fields to include in a partial response.
     */
    fields?: string;
    /**
     * Search query. Search syntax is shared between this api and Admin Console printers pages.
     */
    filter?: string;
    /**
     * API key. Your API key identifies your project and provides you with API access, quota, and reports. Required unless you provide an OAuth 2.0 token.
     */
    key?: string;
    /**
     * OAuth 2.0 token for the current user.
     */
    oauthToken?: string;
    /**
     * The order to sort results by. Must be one of display_name, description, make_and_model, or create_time. Default order is ascending, but descending order can be returned by appending "desc" to the order_by field. For instance, "description desc" will return the printers sorted by description in descending order.
     */
    orderBy?: string;
    /**
     * Organization Unit that we want to list the printers for. When org_unit is not present in the request then all printers of the customer are returned (or filtered). When org_unit is present in the request then only printers available to this OU will be returned (owned or inherited). You may see if printer is owned or inherited for this OU by looking at Printer.org_unit_id.
     */
    orgUnitId?: string;
    /**
     * The maximum number of objects to return. The service may return fewer than this value.
     */
    pageSize?: number;
    /**
     * A page token, received from a previous call.
     */
    pageToken?: string;
    /**
     * Required. The name of the customer who owns this collection of printers. Format: customers/{customer_id}
     */
    parent: string;
    /**
     * Returns response with indentations and line breaks.
     */
    prettyPrint?: boolean;
    /**
     * Available to use for quota purposes for server-side applications. Can be any arbitrary string assigned to a user, but should not exceed 40 characters.
     */
    quotaUser?: string;
    /**
     * Legacy upload protocol for media (e.g. "media", "multipart").
     */
    uploadType?: string;
    /**
     * Upload protocol for media (e.g. "raw", "multipart").
     */
    uploadProtocol?: string;
}
export declare class AdminCustomersChromePrintersListResponse extends SpeakeasyBase {
    contentType: string;
    /**
     * Successful response
     */
    listPrintersResponse?: shared.ListPrintersResponse;
    statusCode: number;
    rawResponse?: AxiosResponse;
}
