import { SpeakeasyBase } from "../../../internal/utils";
/**
 * The reason for the installation failure. This field will always be present.
 */
export declare enum InstallFailureEventFailureReasonEnum {
    Unknown = "unknown",
    Timeout = "timeout"
}
/**
 * An event generated when an app installation failed on a device
 */
export declare class InstallFailureEvent extends SpeakeasyBase {
    /**
     * The Android ID of the device. This field will always be present.
     */
    deviceId?: string;
    /**
     * Additional details on the failure if applicable.
     */
    failureDetails?: string;
    /**
     * The reason for the installation failure. This field will always be present.
     */
    failureReason?: InstallFailureEventFailureReasonEnum;
    /**
     * The id of the product (e.g. "app:com.google.android.gm") for which the install failure event occured. This field will always be present.
     */
    productId?: string;
    /**
     * The ID of the user. This field will always be present.
     */
    userId?: string;
}
