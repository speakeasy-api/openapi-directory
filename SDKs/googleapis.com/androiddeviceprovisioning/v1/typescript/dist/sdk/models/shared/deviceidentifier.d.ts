import { SpeakeasyBase } from "../../../internal/utils";
/**
 * The type of the device
 */
export declare enum DeviceIdentifierDeviceTypeEnum {
    DeviceTypeUnspecified = "DEVICE_TYPE_UNSPECIFIED",
    DeviceTypeAndroid = "DEVICE_TYPE_ANDROID",
    DeviceTypeChromeOs = "DEVICE_TYPE_CHROME_OS"
}
/**
 * Encapsulates hardware and product IDs to identify a manufactured device. To understand requirements on identifier sets, read [Identifiers](https://developers.google.com/zero-touch/guides/identifiers).
 */
export declare class DeviceIdentifier extends SpeakeasyBase {
    /**
     * An identifier provided by OEMs, carried through the production and sales process. Only applicable to Chrome OS devices.
     */
    chromeOsAttestedDeviceId?: string;
    /**
     * The type of the device
     */
    deviceType?: DeviceIdentifierDeviceTypeEnum;
    /**
     * The device’s IMEI number. Validated on input.
     */
    imei?: string;
    /**
     * The device manufacturer’s name. Matches the device's built-in value returned from `android.os.Build.MANUFACTURER`. Allowed values are listed in [Android manufacturers](/zero-touch/resources/manufacturer-names#manufacturers-names).
     */
    manufacturer?: string;
    /**
     * The device’s MEID number.
     */
    meid?: string;
    /**
     * The device model's name. Allowed values are listed in [Android models](/zero-touch/resources/manufacturer-names#model-names) and [Chrome OS models](https://support.google.com/chrome/a/answer/10130175#identify_compatible).
     */
    model?: string;
    /**
     * The manufacturer's serial number for the device. This value might not be unique across different device models.
     */
    serialNumber?: string;
}
