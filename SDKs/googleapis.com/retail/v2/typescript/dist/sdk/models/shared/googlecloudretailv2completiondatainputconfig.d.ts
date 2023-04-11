import { SpeakeasyBase } from "../../../internal/utils";
import { GoogleCloudRetailV2BigQuerySource } from "./googlecloudretailv2bigquerysource";
/**
 * The input config source for completion data.
 */
export declare class GoogleCloudRetailV2CompletionDataInputConfig extends SpeakeasyBase {
    /**
     * BigQuery source import data from.
     */
    bigQuerySource?: GoogleCloudRetailV2BigQuerySource;
}
