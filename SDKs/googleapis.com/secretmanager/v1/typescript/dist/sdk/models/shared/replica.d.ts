import { SpeakeasyBase } from "../../../internal/utils";
import { CustomerManagedEncryption } from "./customermanagedencryption";
/**
 * Represents a Replica for this Secret.
 */
export declare class Replica extends SpeakeasyBase {
    /**
     * Configuration for encrypting secret payloads using customer-managed encryption keys (CMEK).
     */
    customerManagedEncryption?: CustomerManagedEncryption;
    /**
     * The canonical IDs of the location to replicate data. For example: `"us-east1"`.
     */
    location?: string;
}
