import { SpeakeasyBase } from "../../../internal/utils";
/**
 * Represents a custom encryption key configuration that can be applied to a resource.
 */
export declare class GoogleCloudMlV1EncryptionConfig extends SpeakeasyBase {
    /**
     * The Cloud KMS resource identifier of the customer-managed encryption key used to protect a resource, such as a training job. It has the following format: `projects/{PROJECT_ID}/locations/{REGION}/keyRings/{KEY_RING_NAME}/cryptoKeys/{KEY_NAME}`
     */
    kmsKeyName?: string;
}
