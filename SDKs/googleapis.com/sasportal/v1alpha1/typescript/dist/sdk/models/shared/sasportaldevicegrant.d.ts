import { SpeakeasyBase } from "../../../internal/utils";
import { SasPortalDpaMoveList } from "./sasportaldpamovelist";
import { SasPortalFrequencyRange } from "./sasportalfrequencyrange";
/**
 * Type of channel used.
 */
export declare enum SasPortalDeviceGrantChannelTypeEnum {
    ChannelTypeUnspecified = "CHANNEL_TYPE_UNSPECIFIED",
    ChannelTypeGaa = "CHANNEL_TYPE_GAA",
    ChannelTypePal = "CHANNEL_TYPE_PAL"
}
/**
 * State of the grant.
 */
export declare enum SasPortalDeviceGrantStateEnum {
    GrantStateUnspecified = "GRANT_STATE_UNSPECIFIED",
    GrantStateGranted = "GRANT_STATE_GRANTED",
    GrantStateTerminated = "GRANT_STATE_TERMINATED",
    GrantStateSuspended = "GRANT_STATE_SUSPENDED",
    GrantStateAuthorized = "GRANT_STATE_AUTHORIZED",
    GrantStateExpired = "GRANT_STATE_EXPIRED"
}
/**
 * Device grant. It is an authorization provided by the Spectrum Access System to a device to transmit using specified operating parameters after a successful heartbeat by the device.
 */
export declare class SasPortalDeviceGrant extends SpeakeasyBase {
    /**
     * Type of channel used.
     */
    channelType?: SasPortalDeviceGrantChannelTypeEnum;
    /**
     * The expiration time of the grant.
     */
    expireTime?: string;
    /**
     * Frequency range from `low_frequency` to `high_frequency`.
     */
    frequencyRange?: SasPortalFrequencyRange;
    /**
     * Grant Id.
     */
    grantId?: string;
    /**
     * The transmit expiration time of the last heartbeat.
     */
    lastHeartbeatTransmitExpireTime?: string;
    /**
     * Maximum Equivalent Isotropically Radiated Power (EIRP) permitted by the grant. The maximum EIRP is in units of dBm/MHz. The value of `maxEirp` represents the average (RMS) EIRP that would be measured by the procedure defined in FCC part 96.41(e)(3).
     */
    maxEirp?: number;
    /**
     * The DPA move lists on which this grant appears.
     */
    moveList?: SasPortalDpaMoveList[];
    /**
     * State of the grant.
     */
    state?: SasPortalDeviceGrantStateEnum;
    /**
     * If the grant is suspended, the reason(s) for suspension.
     */
    suspensionReason?: string[];
}
