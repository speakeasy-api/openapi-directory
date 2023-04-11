import { SpeakeasyBase } from "../../../internal/utils";
import { CustomerManagedEncryption } from "./customermanagedencryption";
/**
 * A replication policy that replicates the Secret payload without any restrictions.
 */
export declare class Automatic extends SpeakeasyBase {
    /**
     * Configuration for encrypting secret payloads using customer-managed encryption keys (CMEK).
     */
    customerManagedEncryption?: CustomerManagedEncryption;
}
