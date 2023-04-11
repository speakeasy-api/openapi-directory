import { SpeakeasyBase } from "../../../internal/utils";
import { GoogleCloudDatacatalogV1SystemTimestamps } from "./googleclouddatacatalogv1systemtimestamps";
/**
 * Specification of a single file in Cloud Storage.
 */
export declare class GoogleCloudDatacatalogV1GcsFileSpec extends SpeakeasyBase {
    /**
     * Required. Full file path. Example: `gs://bucket_name/a/b.txt`.
     */
    filePath?: string;
    /**
     * Timestamps associated with this resource in a particular system.
     */
    gcsTimestamps?: GoogleCloudDatacatalogV1SystemTimestamps;
    /**
     * Output only. File size in bytes.
     */
    sizeBytes?: string;
}
