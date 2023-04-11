import { SpeakeasyBase } from "../../../internal/utils";
import { AxiosResponse } from "axios";
/**
 * The version of the motion detector that will be used by the camera. Only applies to Gen 2 cameras. Defaults to v2.
 */
export declare enum UpdateDeviceCameraQualityAndRetentionRequestBodyMotionDetectorVersionEnum {
    One = "1",
    Two = "2"
}
/**
 * Quality of the camera. Can be one of 'Standard', 'High' or 'Enhanced'. Not all qualities are supported by every camera model.
 */
export declare enum UpdateDeviceCameraQualityAndRetentionRequestBodyQualityEnum {
    Enhanced = "Enhanced",
    High = "High",
    Standard = "Standard"
}
/**
 * Resolution of the camera. Can be one of '1280x720', '1920x1080', '1080x1080', '2058x2058', '2112x2112', '2880x2880', '2688x1512' or '3840x2160'.Not all resolutions are supported by every camera model.
 */
export declare enum UpdateDeviceCameraQualityAndRetentionRequestBodyResolutionEnum {
    OneThousandAndEightyx1080 = "1080x1080",
    OneThousandTwoHundredAndEightyx720 = "1280x720",
    OneThousandNineHundredAndTwentyx1080 = "1920x1080",
    TwoThousandAndFiftyEightx2058 = "2058x2058",
    TwoThousandOneHundredAndTwelvex2112 = "2112x2112",
    TwoThousandSixHundredAndEightyEightx1512 = "2688x1512",
    TwoThousandEightHundredAndEightyx2880 = "2880x2880",
    ThreeThousandEightHundredAndFortyx2160 = "3840x2160"
}
export declare class UpdateDeviceCameraQualityAndRetentionRequestBody extends SpeakeasyBase {
    /**
     * Boolean indicating if audio recording is enabled(true) or disabled(false) on the camera
     */
    audioRecordingEnabled?: boolean;
    /**
     * Boolean indicating if motion-based retention is enabled(true) or disabled(false) on the camera.
     */
    motionBasedRetentionEnabled?: boolean;
    /**
     * The version of the motion detector that will be used by the camera. Only applies to Gen 2 cameras. Defaults to v2.
     */
    motionDetectorVersion?: UpdateDeviceCameraQualityAndRetentionRequestBodyMotionDetectorVersionEnum;
    /**
     * The ID of a quality and retention profile to assign to the camera. The profile's settings will override all of the per-camera quality and retention settings. If the value of this parameter is null, any existing profile will be unassigned from the camera.
     */
    profileId?: string;
    /**
     * Quality of the camera. Can be one of 'Standard', 'High' or 'Enhanced'. Not all qualities are supported by every camera model.
     */
    quality?: UpdateDeviceCameraQualityAndRetentionRequestBodyQualityEnum;
    /**
     * Resolution of the camera. Can be one of '1280x720', '1920x1080', '1080x1080', '2058x2058', '2112x2112', '2880x2880', '2688x1512' or '3840x2160'.Not all resolutions are supported by every camera model.
     */
    resolution?: UpdateDeviceCameraQualityAndRetentionRequestBodyResolutionEnum;
    /**
     * Boolean indicating if restricted bandwidth is enabled(true) or disabled(false) on the camera. This setting does not apply to MV2 cameras.
     */
    restrictedBandwidthModeEnabled?: boolean;
}
export declare class UpdateDeviceCameraQualityAndRetentionRequest extends SpeakeasyBase {
    requestBody?: UpdateDeviceCameraQualityAndRetentionRequestBody;
    serial: string;
}
export declare class UpdateDeviceCameraQualityAndRetentionResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
    rawResponse?: AxiosResponse;
    /**
     * Successful operation
     */
    updateDeviceCameraQualityAndRetention200ApplicationJSONObject?: Record<string, any>;
}
