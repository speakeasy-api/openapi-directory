import { SpeakeasyBase } from "../../../internal/utils";
import { AxiosResponse } from "axios";
export declare class UpdateDeviceCameraCustomAnalyticsRequestBodyParameters extends SpeakeasyBase {
    /**
     * Name of the parameter
     */
    name: string;
    /**
     * Value of the parameter
     */
    value: string;
}
export declare class UpdateDeviceCameraCustomAnalyticsRequestBody extends SpeakeasyBase {
    /**
     * The ID of the custom analytics artifact
     */
    artifactId?: string;
    /**
     * Enable custom analytics
     */
    enabled?: boolean;
    /**
     * Parameters for the custom analytics workload
     */
    parameters?: UpdateDeviceCameraCustomAnalyticsRequestBodyParameters[];
}
export declare class UpdateDeviceCameraCustomAnalyticsRequest extends SpeakeasyBase {
    requestBody?: UpdateDeviceCameraCustomAnalyticsRequestBody;
    serial: string;
}
export declare class UpdateDeviceCameraCustomAnalyticsResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
    rawResponse?: AxiosResponse;
    /**
     * Successful operation
     */
    updateDeviceCameraCustomAnalytics200ApplicationJSONObject?: Record<string, any>;
}
