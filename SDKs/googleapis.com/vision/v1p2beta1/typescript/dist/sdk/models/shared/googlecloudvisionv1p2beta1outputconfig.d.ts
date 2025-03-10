import { SpeakeasyBase } from "../../../internal/utils";
import { GoogleCloudVisionV1p2beta1GcsDestination } from "./googlecloudvisionv1p2beta1gcsdestination";
/**
 * The desired output location and metadata.
 */
export declare class GoogleCloudVisionV1p2beta1OutputConfig extends SpeakeasyBase {
    /**
     * The max number of response protos to put into each output JSON file on Google Cloud Storage. The valid range is [1, 100]. If not specified, the default value is 20. For example, for one pdf file with 100 pages, 100 response protos will be generated. If `batch_size` = 20, then 5 json files each containing 20 response protos will be written under the prefix `gcs_destination`.`uri`. Currently, batch_size only applies to GcsDestination, with potential future support for other output configurations.
     */
    batchSize?: number;
    /**
     * The Google Cloud Storage location where the output will be written to.
     */
    gcsDestination?: GoogleCloudVisionV1p2beta1GcsDestination;
}
