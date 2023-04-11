import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
export declare class IntegrationsProjectsLocationsProductsIntegrationsVersionsDownloadSecurity extends SpeakeasyBase {
    oauth2: string;
    oauth2c: string;
}
/**
 * File format for download request.
 */
export declare enum IntegrationsProjectsLocationsProductsIntegrationsVersionsDownloadFileFormatEnum {
    FileFormatUnspecified = "FILE_FORMAT_UNSPECIFIED",
    Json = "JSON",
    Yaml = "YAML"
}
export declare class IntegrationsProjectsLocationsProductsIntegrationsVersionsDownloadRequest extends SpeakeasyBase {
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
     * File format for download request.
     */
    fileFormat?: IntegrationsProjectsLocationsProductsIntegrationsVersionsDownloadFileFormatEnum;
    /**
     * API key. Your API key identifies your project and provides you with API access, quota, and reports. Required unless you provide an OAuth 2.0 token.
     */
    key?: string;
    /**
     * Required. The version to download. Format: projects/{project}/locations/{location}/integrations/{integration}/versions/{version}
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
export declare class IntegrationsProjectsLocationsProductsIntegrationsVersionsDownloadResponse extends SpeakeasyBase {
    contentType: string;
    /**
     * Successful response
     */
    googleCloudIntegrationsV1alphaDownloadIntegrationVersionResponse?: shared.GoogleCloudIntegrationsV1alphaDownloadIntegrationVersionResponse;
    statusCode: number;
    rawResponse?: AxiosResponse;
}
