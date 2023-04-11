import { SpeakeasyBase } from "../../../internal/utils";
/**
 * Request message for GenerateConfigReport method.
 */
export declare class GenerateConfigReportRequest extends SpeakeasyBase {
    /**
     * Required. Service configuration for which we want to generate the report. For this version of API, the supported types are google.api.servicemanagement.v1.ConfigRef, google.api.servicemanagement.v1.ConfigSource, and google.api.Service
     */
    newConfig?: Record<string, any>;
    /**
     * Optional. Service configuration against which the comparison will be done. For this version of API, the supported types are google.api.servicemanagement.v1.ConfigRef, google.api.servicemanagement.v1.ConfigSource, and google.api.Service
     */
    oldConfig?: Record<string, any>;
}
