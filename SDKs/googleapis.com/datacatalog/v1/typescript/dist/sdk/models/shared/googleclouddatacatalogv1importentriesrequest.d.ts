import { SpeakeasyBase } from "../../../internal/utils";
/**
 * Request message for ImportEntries method.
 */
export declare class GoogleCloudDatacatalogV1ImportEntriesRequest extends SpeakeasyBase {
    /**
     * Path to a Cloud Storage bucket that contains a dump ready for ingestion.
     */
    gcsBucketPath?: string;
}
