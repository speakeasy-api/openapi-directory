import { SpeakeasyBase } from "../../../internal/utils";
import { SasPortalChannelWithScore } from "./sasportalchannelwithscore";
import { SasPortalDeviceConfig } from "./sasportaldeviceconfig";
import { SasPortalDeviceGrant } from "./sasportaldevicegrant";
import { SasPortalDeviceMetadata, SasPortalDeviceMetadataInput } from "./sasportaldevicemetadata";
import { SasPortalFrequencyRange } from "./sasportalfrequencyrange";
/**
 * Output only. Device state.
 */
export declare enum SasPortalDeviceStateEnum {
    DeviceStateUnspecified = "DEVICE_STATE_UNSPECIFIED",
    Reserved = "RESERVED",
    Registered = "REGISTERED",
    Deregistered = "DEREGISTERED"
}
/**
 * Successful response
 */
export declare class SasPortalDevice extends SpeakeasyBase {
    /**
     * Information about the device configuration.
     */
    activeConfig?: SasPortalDeviceConfig;
    /**
     * Output only. Current channels with scores.
     */
    currentChannels?: SasPortalChannelWithScore[];
    /**
     * Device data overridable by both SAS Portal and registration requests.
     */
    deviceMetadata?: SasPortalDeviceMetadata;
    /**
     * Device display name.
     */
    displayName?: string;
    /**
     * The FCC identifier of the device.
     */
    fccId?: string;
    /**
     * Only ranges that are within the allowlists are available for new grants.
     */
    grantRangeAllowlists?: SasPortalFrequencyRange[];
    /**
     * Output only. Grants held by the device.
     */
    grants?: SasPortalDeviceGrant[];
    /**
     * Output only. The resource path name.
     */
    name?: string;
    /**
     * Information about the device configuration.
     */
    preloadedConfig?: SasPortalDeviceConfig;
    /**
     * A serial number assigned to the device by the device manufacturer.
     */
    serialNumber?: string;
    /**
     * Output only. Device state.
     */
    state?: SasPortalDeviceStateEnum;
}
export declare class SasPortalDeviceInput extends SpeakeasyBase {
    /**
     * Information about the device configuration.
     */
    activeConfig?: SasPortalDeviceConfig;
    /**
     * Device data overridable by both SAS Portal and registration requests.
     */
    deviceMetadata?: SasPortalDeviceMetadataInput;
    /**
     * Device display name.
     */
    displayName?: string;
    /**
     * The FCC identifier of the device.
     */
    fccId?: string;
    /**
     * Only ranges that are within the allowlists are available for new grants.
     */
    grantRangeAllowlists?: SasPortalFrequencyRange[];
    /**
     * Output only. Grants held by the device.
     */
    grants?: SasPortalDeviceGrant[];
    /**
     * Output only. The resource path name.
     */
    name?: string;
    /**
     * Information about the device configuration.
     */
    preloadedConfig?: SasPortalDeviceConfig;
    /**
     * A serial number assigned to the device by the device manufacturer.
     */
    serialNumber?: string;
    /**
     * Output only. Device state.
     */
    state?: SasPortalDeviceStateEnum;
}
