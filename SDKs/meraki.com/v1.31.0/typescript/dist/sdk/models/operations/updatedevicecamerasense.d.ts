import { SpeakeasyBase } from "../../../internal/utils";
import { AxiosResponse } from "axios";
/**
 * The details of the audio detection config.
 */
export declare class UpdateDeviceCameraSenseRequestBodyAudioDetection extends SpeakeasyBase {
    /**
     * Boolean indicating if audio detection is enabled(true) or disabled(false) on the camera
     */
    enabled?: boolean;
}
export declare class UpdateDeviceCameraSenseRequestBody extends SpeakeasyBase {
    /**
     * The details of the audio detection config.
     */
    audioDetection?: UpdateDeviceCameraSenseRequestBodyAudioDetection;
    /**
     * The ID of the object detection model
     */
    detectionModelId?: string;
    /**
     * The ID of the MQTT broker to be enabled on the camera. A value of null will disable MQTT on the camera
     */
    mqttBrokerId?: string;
    /**
     * Boolean indicating if sense(license) is enabled(true) or disabled(false) on the camera
     */
    senseEnabled?: boolean;
}
export declare class UpdateDeviceCameraSenseRequest extends SpeakeasyBase {
    requestBody?: UpdateDeviceCameraSenseRequestBody;
    serial: string;
}
export declare class UpdateDeviceCameraSenseResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
    rawResponse?: AxiosResponse;
    /**
     * Successful operation
     */
    updateDeviceCameraSense200ApplicationJSONObject?: Record<string, any>;
}
