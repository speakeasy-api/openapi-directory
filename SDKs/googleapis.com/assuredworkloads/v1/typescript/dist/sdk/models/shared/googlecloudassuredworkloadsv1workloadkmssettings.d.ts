import { SpeakeasyBase } from "../../../internal/utils";
/**
 * Settings specific to the Key Management Service. This message is deprecated. In order to create a Keyring, callers should specify, ENCRYPTION_KEYS_PROJECT or KEYRING in ResourceSettings.resource_type field.
 */
export declare class GoogleCloudAssuredworkloadsV1WorkloadKMSSettings extends SpeakeasyBase {
    /**
     * Required. Input only. Immutable. The time at which the Key Management Service will automatically create a new version of the crypto key and mark it as the primary.
     */
    nextRotationTime?: string;
    /**
     * Required. Input only. Immutable. [next_rotation_time] will be advanced by this period when the Key Management Service automatically rotates a key. Must be at least 24 hours and at most 876,000 hours.
     */
    rotationPeriod?: string;
}
