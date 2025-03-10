import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
export declare class ProdTtSasportalNodesNodesNodesListSecurityOption1 extends SpeakeasyBase {
    oauth2: string;
    oauth2c: string;
}
export declare class ProdTtSasportalNodesNodesNodesListSecurityOption2 extends SpeakeasyBase {
    oauth2: string;
    oauth2c: string;
}
export declare class ProdTtSasportalNodesNodesNodesListSecurity extends SpeakeasyBase {
    option1?: ProdTtSasportalNodesNodesNodesListSecurityOption1;
    option2?: ProdTtSasportalNodesNodesNodesListSecurityOption2;
}
export declare class ProdTtSasportalNodesNodesNodesListRequest extends SpeakeasyBase {
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
     * The filter expression. The filter should have the following format: "DIRECT_CHILDREN" or format: "direct_children". The filter is case insensitive. If empty, then no nodes are filtered.
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
     * The maximum number of nodes to return in the response.
     */
    pageSize?: number;
    /**
     * A pagination token returned from a previous call to ListNodes that indicates where this listing should continue from.
     */
    pageToken?: string;
    /**
     * Required. The parent resource name, for example, "nodes/1".
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
export declare class ProdTtSasportalNodesNodesNodesListResponse extends SpeakeasyBase {
    contentType: string;
    /**
     * Successful response
     */
    sasPortalListNodesResponse?: shared.SasPortalListNodesResponse;
    statusCode: number;
    rawResponse?: AxiosResponse;
}
