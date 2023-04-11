import { SpeakeasyBase } from "../../../internal/utils";
/**
 * State of (flood-)light
 */
export declare enum NAWelcomeCameraLightModeStatusEnum {
    On = "on",
    Off = "off",
    Auto = "auto"
}
export declare class NAWelcomeCamera extends SpeakeasyBase {
    /**
     * If power supply is ok (on/off)
     */
    alimStatus?: string;
    /**
     * Id of the camera
     */
    id?: string;
    /**
     * Only for scope access_camera. If Camera and application requesting the information are on the same IP (true/false)
     */
    isLocal?: boolean;
    /**
     * State of (flood-)light
     */
    lightModeStatus?: NAWelcomeCameraLightModeStatusEnum;
    /**
     * Name of the camera
     */
    name?: string;
    /**
     * If SD card status is ok (on/off)
     */
    sdStatus?: string;
    /**
     * If camera is monitoring (on/off)
     */
    status?: string;
    /**
     * Type of the camera
     */
    type?: string;
    /**
     * Only for scope access_camera. Address of the camera
     */
    vpnUrl?: string;
}
