import { SpeakeasyBase } from "../../../internal/utils";
/**
 * Config info for Cloud Logging
 */
export declare class GoogleCloudIntegrationsV1alphaCloudLoggingConfig extends SpeakeasyBase {
    /**
     * Cloud bucket name for the project.
     */
    bucket?: string;
    /**
     * This field determines whether the logs should be sent to cloud logging api
     */
    enableCloudLogging?: boolean;
}
