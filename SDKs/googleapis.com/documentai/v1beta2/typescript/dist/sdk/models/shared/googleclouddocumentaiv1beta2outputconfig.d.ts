import { SpeakeasyBase } from "../../../internal/utils";
import { GoogleCloudDocumentaiV1beta2GcsDestination } from "./googleclouddocumentaiv1beta2gcsdestination";
/**
 * The desired output location and metadata.
 */
export declare class GoogleCloudDocumentaiV1beta2OutputConfig extends SpeakeasyBase {
    /**
     * The Google Cloud Storage location where the output file will be written to.
     */
    gcsDestination?: GoogleCloudDocumentaiV1beta2GcsDestination;
    /**
     * The max number of pages to include into each output Document shard JSON on Google Cloud Storage. The valid range is [1, 100]. If not specified, the default value is 20. For example, for one pdf file with 100 pages, 100 parsed pages will be produced. If `pages_per_shard` = 20, then 5 Document shard JSON files each containing 20 parsed pages will be written under the prefix OutputConfig.gcs_destination.uri and suffix pages-x-to-y.json where x and y are 1-indexed page numbers. Example GCS outputs with 157 pages and pages_per_shard = 50: pages-001-to-050.json pages-051-to-100.json pages-101-to-150.json pages-151-to-157.json
     */
    pagesPerShard?: number;
}
