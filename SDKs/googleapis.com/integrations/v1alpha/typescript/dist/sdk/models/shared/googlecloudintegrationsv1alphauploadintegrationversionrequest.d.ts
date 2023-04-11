import { SpeakeasyBase } from "../../../internal/utils";
/**
 * File format for upload request.
 */
export declare enum GoogleCloudIntegrationsV1alphaUploadIntegrationVersionRequestFileFormatEnum {
    FileFormatUnspecified = "FILE_FORMAT_UNSPECIFIED",
    Json = "JSON",
    Yaml = "YAML"
}
/**
 * Request for UploadIntegrationVersion.
 */
export declare class GoogleCloudIntegrationsV1alphaUploadIntegrationVersionRequest extends SpeakeasyBase {
    /**
     * The textproto of the integration_version.
     */
    content?: string;
    /**
     * File format for upload request.
     */
    fileFormat?: GoogleCloudIntegrationsV1alphaUploadIntegrationVersionRequestFileFormatEnum;
}
