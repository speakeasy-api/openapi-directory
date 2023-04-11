import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
export declare class CloudsearchDebugIdentitysourcesItemsListForunmappedidentitySecurityOption1 extends SpeakeasyBase {
    oauth2: string;
    oauth2c: string;
}
export declare class CloudsearchDebugIdentitysourcesItemsListForunmappedidentitySecurityOption2 extends SpeakeasyBase {
    oauth2: string;
    oauth2c: string;
}
export declare class CloudsearchDebugIdentitysourcesItemsListForunmappedidentitySecurity extends SpeakeasyBase {
    option1?: CloudsearchDebugIdentitysourcesItemsListForunmappedidentitySecurityOption1;
    option2?: CloudsearchDebugIdentitysourcesItemsListForunmappedidentitySecurityOption2;
}
export declare class CloudsearchDebugIdentitysourcesItemsListForunmappedidentityRequest extends SpeakeasyBase {
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
     * If you are asked by Google to help with debugging, set this field. Otherwise, ignore this field.
     */
    debugOptionsEnableDebugging?: boolean;
    /**
     * Selector specifying which fields to include in a partial response.
     */
    fields?: string;
    groupResourceName?: string;
    /**
     * API key. Your API key identifies your project and provides you with API access, quota, and reports. Required unless you provide an OAuth 2.0 token.
     */
    key?: string;
    /**
     * OAuth 2.0 token for the current user.
     */
    oauthToken?: string;
    /**
     * Maximum number of items to fetch in a request. Defaults to 100.
     */
    pageSize?: number;
    /**
     * The next_page_token value returned from a previous List request, if any.
     */
    pageToken?: string;
    /**
     * The name of the identity source, in the following format: identitysources/{source_id}}
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
    userResourceName?: string;
}
export declare class CloudsearchDebugIdentitysourcesItemsListForunmappedidentityResponse extends SpeakeasyBase {
    contentType: string;
    /**
     * Successful response
     */
    listItemNamesForUnmappedIdentityResponse?: shared.ListItemNamesForUnmappedIdentityResponse;
    statusCode: number;
    rawResponse?: AxiosResponse;
}
