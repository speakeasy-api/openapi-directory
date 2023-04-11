import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
export declare class DiscoveryengineProjectsLocationsDataStoresServingConfigsRecommendSecurity extends SpeakeasyBase {
    oauth2: string;
    oauth2c: string;
}
export declare class DiscoveryengineProjectsLocationsDataStoresServingConfigsRecommendRequest extends SpeakeasyBase {
    /**
     * V1 error format.
     */
    dollarXgafv?: shared.XgafvEnum;
    googleCloudDiscoveryengineV1alphaRecommendRequest?: shared.GoogleCloudDiscoveryengineV1alphaRecommendRequest;
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
     * Required. Full resource name of the format: projects/* /locations/global/collections/* /dataStores/* /servingConfigs/* Before you can request recommendations from your model, you must create at least one serving config for it.
     */
    servingConfig: string;
    /**
     * Legacy upload protocol for media (e.g. "media", "multipart").
     */
    uploadType?: string;
    /**
     * Upload protocol for media (e.g. "raw", "multipart").
     */
    uploadProtocol?: string;
}
export declare class DiscoveryengineProjectsLocationsDataStoresServingConfigsRecommendResponse extends SpeakeasyBase {
    contentType: string;
    /**
     * Successful response
     */
    googleCloudDiscoveryengineV1alphaRecommendResponse?: shared.GoogleCloudDiscoveryengineV1alphaRecommendResponse;
    statusCode: number;
    rawResponse?: AxiosResponse;
}
