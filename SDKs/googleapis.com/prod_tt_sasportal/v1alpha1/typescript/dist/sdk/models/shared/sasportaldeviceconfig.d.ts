import { SpeakeasyBase } from "../../../internal/utils";
import { SasPortalDeviceAirInterface } from "./sasportaldeviceairinterface";
import { SasPortalDeviceModel } from "./sasportaldevicemodel";
import { SasPortalInstallationParams } from "./sasportalinstallationparams";
/**
 * FCC category of the device.
 */
export declare enum SasPortalDeviceConfigCategoryEnum {
    DeviceCategoryUnspecified = "DEVICE_CATEGORY_UNSPECIFIED",
    DeviceCategoryA = "DEVICE_CATEGORY_A",
    DeviceCategoryB = "DEVICE_CATEGORY_B"
}
export declare enum SasPortalDeviceConfigMeasurementCapabilitiesEnum {
    MeasurementCapabilityUnspecified = "MEASUREMENT_CAPABILITY_UNSPECIFIED",
    MeasurementCapabilityReceivedPowerWithGrant = "MEASUREMENT_CAPABILITY_RECEIVED_POWER_WITH_GRANT",
    MeasurementCapabilityReceivedPowerWithoutGrant = "MEASUREMENT_CAPABILITY_RECEIVED_POWER_WITHOUT_GRANT"
}
/**
 * State of the configuration.
 */
export declare enum SasPortalDeviceConfigStateEnum {
    DeviceConfigStateUnspecified = "DEVICE_CONFIG_STATE_UNSPECIFIED",
    Draft = "DRAFT",
    Final = "FINAL"
}
/**
 * Information about the device configuration.
 */
export declare class SasPortalDeviceConfig extends SpeakeasyBase {
    /**
     * Information about the device's air interface.
     */
    airInterface?: SasPortalDeviceAirInterface;
    /**
     * The call sign of the device operator.
     */
    callSign?: string;
    /**
     * FCC category of the device.
     */
    category?: SasPortalDeviceConfigCategoryEnum;
    /**
     * Information about the device installation parameters.
     */
    installationParams?: SasPortalInstallationParams;
    /**
     * Output only. Whether the configuration has been signed by a CPI.
     */
    isSigned?: boolean;
    /**
     * Measurement reporting capabilities of the device.
     */
    measurementCapabilities?: SasPortalDeviceConfigMeasurementCapabilitiesEnum[];
    /**
     * Information about the model of the device.
     */
    model?: SasPortalDeviceModel;
    /**
     * State of the configuration.
     */
    state?: SasPortalDeviceConfigStateEnum;
    /**
     * Output only. The last time the device configuration was edited.
     */
    updateTime?: string;
    /**
     * The identifier of a device user.
     */
    userId?: string;
}
