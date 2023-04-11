import { SpeakeasyBase } from "../../../internal/utils";
import { PerAndroidVersionInfo } from "./perandroidversioninfo";
/**
 * Whether this device is virtual or physical.
 */
export declare enum AndroidModelFormEnum {
    DeviceFormUnspecified = "DEVICE_FORM_UNSPECIFIED",
    Virtual = "VIRTUAL",
    Physical = "PHYSICAL",
    Emulator = "EMULATOR"
}
/**
 * Whether this device is a phone, tablet, wearable, etc.
 */
export declare enum AndroidModelFormFactorEnum {
    DeviceFormFactorUnspecified = "DEVICE_FORM_FACTOR_UNSPECIFIED",
    Phone = "PHONE",
    Tablet = "TABLET",
    Wearable = "WEARABLE"
}
/**
 * A description of an Android device tests may be run on.
 */
export declare class AndroidModel extends SpeakeasyBase {
    /**
     * The company that this device is branded with. Example: "Google", "Samsung".
     */
    brand?: string;
    /**
     * The name of the industrial design. This corresponds to android.os.Build.DEVICE.
     */
    codename?: string;
    /**
     * Whether this device is virtual or physical.
     */
    form?: AndroidModelFormEnum;
    /**
     * Whether this device is a phone, tablet, wearable, etc.
     */
    formFactor?: AndroidModelFormFactorEnum;
    /**
     * The unique opaque id for this model. Use this for invoking the TestExecutionService.
     */
    id?: string;
    /**
     * True if and only if tests with this model are recorded by stitching together screenshots. See use_low_spec_video_recording in device config.
     */
    lowFpsVideoRecording?: boolean;
    /**
     * The manufacturer of this device.
     */
    manufacturer?: string;
    /**
     * The human-readable marketing name for this device model. Examples: "Nexus 5", "Galaxy S5".
     */
    name?: string;
    /**
     * Version-specific information of an Android model.
     */
    perVersionInfo?: PerAndroidVersionInfo[];
    /**
     * Screen density in DPI. This corresponds to ro.sf.lcd_density
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
     * The list of supported ABIs for this device. This corresponds to either android.os.Build.SUPPORTED_ABIS (for API level 21 and above) or android.os.Build.CPU_ABI/CPU_ABI2. The most preferred ABI is the first element in the list. Elements are optionally prefixed by "version_id:" (where version_id is the id of an AndroidVersion), denoting an ABI that is supported only on a particular version.
     */
    supportedAbis?: string[];
    /**
     * The set of Android versions this device supports.
     */
    supportedVersionIds?: string[];
    /**
     * Tags for this dimension. Examples: "default", "preview", "deprecated".
     */
    tags?: string[];
    /**
     * URL of a thumbnail image (photo) of the device.
     */
    thumbnailUrl?: string;
}
