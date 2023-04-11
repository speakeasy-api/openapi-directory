import { SpeakeasyBase } from "../../../internal/utils";
/**
 * Aggregate information about the resources protected by a Cloud KMS key in the same Cloud organization as the key.
 */
export declare class GoogleCloudKmsInventoryV1ProtectedResourcesSummary extends SpeakeasyBase {
    /**
     * The number of resources protected by the key grouped by Cloud product.
     */
    cloudProducts?: Record<string, string>;
    /**
     * The number of resources protected by the key grouped by region.
     */
    locations?: Record<string, string>;
    /**
     * The full name of the ProtectedResourcesSummary resource. Example: projects/test-project/locations/us/keyRings/test-keyring/cryptoKeys/test-key/protectedResourcesSummary
     */
    name?: string;
    /**
     * The number of distinct Cloud projects in the same Cloud organization as the key that have resources protected by the key.
     */
    projectCount?: number;
    /**
     * The total number of protected resources in the same Cloud organization as the key.
     */
    resourceCount?: string;
    /**
     * The number of resources protected by the key grouped by resource type.
     */
    resourceTypes?: Record<string, string>;
}
