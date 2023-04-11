import { SpeakeasyBase } from "../../../internal/utils";
/**
 * Metadata about a resource protected by a Cloud KMS key.
 */
export declare class GoogleCloudKmsInventoryV1ProtectedResource extends SpeakeasyBase {
    /**
     * The Cloud product that owns the resource. Example: `compute`
     */
    cloudProduct?: string;
    /**
     * Output only. The time at which this resource was created. The granularity is in seconds. Timestamp.nanos will always be 0.
     */
    createTime?: string;
    /**
     * The name of the Cloud KMS [CryptoKeyVersion](https://cloud.google.com/kms/docs/reference/rest/v1/projects.locations.keyRings.cryptoKeys.cryptoKeyVersions?hl=en) used to protect this resource via CMEK. This field is empty if the Google Cloud product owning the resource does not provide key version data to Asset Inventory. If there are multiple key versions protecting the resource, then this is same value as the first element of crypto_key_versions.
     */
    cryptoKeyVersion?: string;
    /**
     * The names of the Cloud KMS [CryptoKeyVersion](https://cloud.google.com/kms/docs/reference/rest/v1/projects.locations.keyRings.cryptoKeys.cryptoKeyVersions?hl=en) used to protect this resource via CMEK. This field is empty if the Google Cloud product owning the resource does not provide key versions data to Asset Inventory. The first element of this field is stored in crypto_key_version.
     */
    cryptoKeyVersions?: string[];
    /**
     * A key-value pair of the resource's labels (v1) to their values.
     */
    labels?: Record<string, string>;
    /**
     * Location can be `global`, regional like `us-east1`, or zonal like `us-west1-b`.
     */
    location?: string;
    /**
     * The full resource name of the resource. Example: `//compute.googleapis.com/projects/my_project_123/zones/zone1/instances/instance1`.
     */
    name?: string;
    /**
     * Format: `projects/{PROJECT_NUMBER}`.
     */
    project?: string;
    /**
     * The ID of the project that owns the resource.
     */
    projectId?: string;
    /**
     * Example: `compute.googleapis.com/Disk`
     */
    resourceType?: string;
}
