import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
export declare class RetailProjectsLocationsCatalogsAttributesConfigRemoveCatalogAttributeSecurity extends SpeakeasyBase {
    oauth2: string;
    oauth2c: string;
}
export declare class RetailProjectsLocationsCatalogsAttributesConfigRemoveCatalogAttributeRequest extends SpeakeasyBase {
    /**
     * V1 error format.
     */
    dollarXgafv?: shared.XgafvEnum;
    googleCloudRetailV2betaRemoveCatalogAttributeRequest?: shared.GoogleCloudRetailV2betaRemoveCatalogAttributeRequest;
    /**
     * OAuth access token.
     */
    accessToken?: string;
    /**
     * Data format for response.
     */
    alt?: shared.AltEnum;
    /**
     * Required. Full AttributesConfig resource name. Format: `projects/{project_number}/locations/{location_id}/catalogs/{catalog_id}/attributesConfig`
     */
    attributesConfig: string;
    /**
     * JSONP
     */
    callback?: string;
    /**
     * Selector specifying which fields to include in a partial response.
     */
    fields?: string;
    /**
     * API key. Your API key identifies your project and provides you with API access, quota, and reports. Required unless you provide an OAuth 2.0 token.
     */
    key?: string;
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
export declare class RetailProjectsLocationsCatalogsAttributesConfigRemoveCatalogAttributeResponse extends SpeakeasyBase {
    contentType: string;
    /**
     * Successful response
     */
    googleCloudRetailV2betaAttributesConfig?: shared.GoogleCloudRetailV2betaAttributesConfig;
    statusCode: number;
    rawResponse?: AxiosResponse;
}
