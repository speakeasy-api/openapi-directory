import { SpeakeasyBase } from "../../../internal/utils";
/**
 * Specifies how the height is measured.
 */
export declare enum SasPortalInstallationParamsHeightTypeEnum {
    HeightTypeUnspecified = "HEIGHT_TYPE_UNSPECIFIED",
    HeightTypeAgl = "HEIGHT_TYPE_AGL",
    HeightTypeAmsl = "HEIGHT_TYPE_AMSL"
}
/**
 * Information about the device installation parameters.
 */
export declare class SasPortalInstallationParams extends SpeakeasyBase {
    /**
     * Boresight direction of the horizontal plane of the antenna in degrees with respect to true north. The value of this parameter is an integer with a value between 0 and 359 inclusive. A value of 0 degrees means true north; a value of 90 degrees means east. This parameter is optional for Category A devices and conditional for Category B devices.
     */
    antennaAzimuth?: number;
    /**
     * 3-dB antenna beamwidth of the antenna in the horizontal-plane in degrees. This parameter is an unsigned integer having a value between 0 and 360 (degrees) inclusive; it is optional for Category A devices and conditional for Category B devices.
     */
    antennaBeamwidth?: number;
    /**
     * Antenna downtilt in degrees and is an integer with a value between -90 and +90 inclusive; a negative value means the antenna is tilted up (above horizontal). This parameter is optional for Category A devices and conditional for Category B devices.
     */
    antennaDowntilt?: number;
    /**
     * Peak antenna gain in dBi. This parameter is an integer with a value between -127 and +128 (dBi) inclusive.
     */
    antennaGain?: number;
    /**
     * As above, but as a DoubleValue.
     */
    antennaGainNewField?: number;
    /**
     * If an external antenna is used, the antenna model is optionally provided in this field. The string has a maximum length of 128 octets.
     */
    antennaModel?: string;
    /**
     * If present, this parameter specifies whether the CBSD is a CPE-CBSD or not.
     */
    cpeCbsdIndication?: boolean;
    /**
     * This parameter is the maximum device EIRP in units of dBm/10MHz and is an integer with a value between -127 and +47 (dBm/10 MHz) inclusive. If not included, SAS interprets it as maximum allowable EIRP in units of dBm/10MHz for device category.
     */
    eirpCapability?: number;
    /**
     * As above, but as a DoubleValue.
     */
    eirpCapabilityNewField?: number;
    /**
     * Device antenna height in meters. When the `heightType` parameter value is "AGL", the antenna height should be given relative to ground level. When the `heightType` parameter value is "AMSL", it is given with respect to WGS84 datum.
     */
    height?: number;
    /**
     * Specifies how the height is measured.
     */
    heightType?: SasPortalInstallationParamsHeightTypeEnum;
    /**
     * A positive number in meters to indicate accuracy of the device antenna horizontal location. This optional parameter should only be present if its value is less than the FCC requirement of 50 meters.
     */
    horizontalAccuracy?: number;
    /**
     * Whether the device antenna is indoor or not. `true`: indoor. `false`: outdoor.
     */
    indoorDeployment?: boolean;
    /**
     * Latitude of the device antenna location in degrees relative to the WGS 84 datum. The allowed range is from -90.000000 to +90.000000. Positive values represent latitudes north of the equator; negative values south of the equator.
     */
    latitude?: number;
    /**
     * Longitude of the device antenna location in degrees relative to the WGS 84 datum. The allowed range is from -180.000000 to +180.000000. Positive values represent longitudes east of the prime meridian; negative values west of the prime meridian.
     */
    longitude?: number;
    /**
     * A positive number in meters to indicate accuracy of the device antenna vertical location. This optional parameter should only be present if its value is less than the FCC requirement of 3 meters.
     */
    verticalAccuracy?: number;
}
