import { SpeakeasyBase } from "../../../internal/utils";
import { GoogleCloudDatacatalogV1beta1SystemTimestamps } from "./googleclouddatacatalogv1beta1systemtimestamps";
/**
 * Specifications of a single file in Cloud Storage.
 */
export declare class GoogleCloudDatacatalogV1beta1GcsFileSpec extends SpeakeasyBase {
    /**
     * Required. The full file path. Example: `gs://bucket_name/a/b.txt`.
     */
    filePath?: string;
    /**
     * Timestamps about this resource according to a particular system.
     */
    gcsTimestamps?: GoogleCloudDatacatalogV1beta1SystemTimestamps;
    /**
     * Output only. The size of the file, in bytes.
     */
    sizeBytes?: string;
}
