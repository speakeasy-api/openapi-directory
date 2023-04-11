import { SpeakeasyBase } from "../../../internal/utils";
/**
 * Encryption settings for the service.
 */
export declare class EncryptionConfig extends SpeakeasyBase {
    /**
     * The fully qualified customer provided Cloud KMS key name to use for customer data encryption, in the following form:projects/{project_number}/locations/{location_id}/keyRings/{key_ring_id}/cryptoKeys/{crypto_key_id}.
     */
    kmsKey?: string;
}
