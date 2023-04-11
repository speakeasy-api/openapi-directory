import { SpeakeasyBase } from "../../../internal/utils";
import { GoogleCloudChannelV1RenewalSettings } from "./googlecloudchannelv1renewalsettings";
/**
 * Commitment settings for commitment-based offers.
 */
export declare class GoogleCloudChannelV1CommitmentSettingsInput extends SpeakeasyBase {
    /**
     * Renewal settings for renewable Offers.
     */
    renewalSettings?: GoogleCloudChannelV1RenewalSettings;
}
/**
 * Commitment settings for commitment-based offers.
 */
export declare class GoogleCloudChannelV1CommitmentSettings extends SpeakeasyBase {
    /**
     * Output only. Commitment end timestamp.
     */
    endTime?: string;
    /**
     * Renewal settings for renewable Offers.
     */
    renewalSettings?: GoogleCloudChannelV1RenewalSettings;
    /**
     * Output only. Commitment start timestamp.
     */
    startTime?: string;
}
