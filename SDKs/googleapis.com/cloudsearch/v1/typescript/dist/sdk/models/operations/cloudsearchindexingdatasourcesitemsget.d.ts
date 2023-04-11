import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
export declare class CloudsearchIndexingDatasourcesItemsGetSecurityOption1 extends SpeakeasyBase {
    oauth2: string;
    oauth2c: string;
}
export declare class CloudsearchIndexingDatasourcesItemsGetSecurityOption2 extends SpeakeasyBase {
    oauth2: string;
    oauth2c: string;
}
export declare class CloudsearchIndexingDatasourcesItemsGetSecurity extends SpeakeasyBase {
    option1?: CloudsearchIndexingDatasourcesItemsGetSecurityOption1;
    option2?: CloudsearchIndexingDatasourcesItemsGetSecurityOption2;
}
export declare class CloudsearchIndexingDatasourcesItemsGetRequest extends SpeakeasyBase {
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
     * The name of connector making this call. Format: datasources/{source_id}/connectors/{ID}
     */
    connectorName?: string;
    /**
     * If you are asked by Google to help with debugging, set this field. Otherwise, ignore this field.
     */
    debugOptionsEnableDebugging?: boolean;
    /**
     * Selector specifying which fields to include in a partial response.
     */
    fields?: string;
    /**
     * API key. Your API key identifies your project and provides you with API access, quota, and reports. Required unless you provide an OAuth 2.0 token.
     */
    key?: string;
    /**
     * The name of the item to get info. Format: datasources/{source_id}/items/{item_id}
     */
    name: string;
    /**
     * OAuth 2.0 token for the current user.
     */
    oauthToken?: string;
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
export declare class CloudsearchIndexingDatasourcesItemsGetResponse extends SpeakeasyBase {
    contentType: string;
    /**
     * Successful response
     */
    item?: shared.Item;
    statusCode: number;
    rawResponse?: AxiosResponse;
}
