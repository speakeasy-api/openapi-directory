import { SpeakeasyBase } from "../../../internal/utils";
import { CustomerManagedEncryptionStatus } from "./customermanagedencryptionstatus";
/**
 * Describes the status of a user-managed replica for the SecretVersion.
 */
export declare class ReplicaStatus extends SpeakeasyBase {
    /**
     * Describes the status of customer-managed encryption.
     */
    customerManagedEncryption?: CustomerManagedEncryptionStatus;
    /**
     * Output only. The canonical ID of the replica location. For example: `"us-east1"`.
     */
    location?: string;
}
