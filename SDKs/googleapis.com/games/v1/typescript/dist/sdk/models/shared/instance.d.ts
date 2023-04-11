import { SpeakeasyBase } from "../../../internal/utils";
import { InstanceAndroidDetails } from "./instanceandroiddetails";
import { InstanceIosDetails } from "./instanceiosdetails";
import { InstanceWebDetails } from "./instancewebdetails";
/**
 * The platform type.
 */
export declare enum InstancePlatformTypeEnum {
    PlatformTypeUnspecified = "PLATFORM_TYPE_UNSPECIFIED",
    Android = "ANDROID",
    Ios = "IOS",
    WebApp = "WEB_APP"
}
/**
 * The Instance resource.
 */
export declare class Instance extends SpeakeasyBase {
    /**
     * URI which shows where a user can acquire this instance.
     */
    acquisitionUri?: string;
    /**
     * The Android instance details resource.
     */
    androidInstance?: InstanceAndroidDetails;
    /**
     * The iOS details resource.
     */
    iosInstance?: InstanceIosDetails;
    /**
     * Uniquely identifies the type of this resource. Value is always the fixed string `games#instance`.
     */
    kind?: string;
    /**
     * Localized display name.
     */
    name?: string;
    /**
     * The platform type.
     */
    platformType?: InstancePlatformTypeEnum;
    /**
     * Flag to show if this game instance supports realtime play.
     */
    realtimePlay?: boolean;
    /**
     * Flag to show if this game instance supports turn based play.
     */
    turnBasedPlay?: boolean;
    /**
     * The Web details resource.
     */
    webInstance?: InstanceWebDetails;
}
