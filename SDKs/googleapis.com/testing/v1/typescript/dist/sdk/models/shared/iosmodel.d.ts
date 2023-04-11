import { SpeakeasyBase } from "../../../internal/utils";
import { PerIosVersionInfo } from "./periosversioninfo";
/**
 * Whether this device is a phone, tablet, wearable, etc.
 */
export declare enum IosModelFormFactorEnum {
    DeviceFormFactorUnspecified = "DEVICE_FORM_FACTOR_UNSPECIFIED",
    Phone = "PHONE",
    Tablet = "TABLET",
    Wearable = "WEARABLE"
}
/**
 * A description of an iOS device tests may be run on.
 */
export declare class IosModel extends SpeakeasyBase {
    /**
     * Device capabilities. Copied from https://developer.apple.com/library/archive/documentation/DeviceInformation/Reference/iOSDeviceCompatibility/DeviceCompatibilityMatrix/DeviceCompatibilityMatrix.html
     */
    deviceCapabilities?: string[];
    /**
     * Whether this device is a phone, tablet, wearable, etc.
     */
    formFactor?: IosModelFormFactorEnum;
    /**
     * The unique opaque id for this model. Use this for invoking the TestExecutionService.
     */
    id?: string;
    /**
     * The human-readable name for this device model. Examples: "iPhone 4s", "iPad Mini 2".
     */
    name?: string;
    /**
     * Version-specific information of an iOS model.
     */
    perVersionInfo?: PerIosVersionInfo[];
    /**
     * Screen density in DPI.
     */
    screenDensity?: number;
    /**
     * Screen size in the horizontal (X) dimension measured in pixels.
     */
    screenX?: number;
    /**
     * Screen size in the vertical (Y) dimension measured in pixels.
     */
    screenY?: number;
    /**
     * The set of iOS major software versions this device supports.
     */
    supportedVersionIds?: string[];
    /**
     * Tags for this dimension. Examples: "default", "preview", "deprecated".
     */
    tags?: string[];
}
