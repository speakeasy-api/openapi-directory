import { SpeakeasyBase } from "../../../internal/utils";
import { BigQueryIODetails } from "./bigqueryiodetails";
import { BigTableIODetails } from "./bigtableiodetails";
import { DatastoreIODetails } from "./datastoreiodetails";
import { FileIODetails } from "./fileiodetails";
import { PubSubIODetails } from "./pubsubiodetails";
import { SDKVersion } from "./sdkversion";
import { SpannerIODetails } from "./spanneriodetails";
/**
 * Metadata available primarily for filtering jobs. Will be included in the ListJob response and Job SUMMARY view.
 */
export declare class JobMetadata extends SpeakeasyBase {
    /**
     * Identification of a Cloud Bigtable source used in the Dataflow job.
     */
    bigTableDetails?: BigTableIODetails[];
    /**
     * Identification of a BigQuery source used in the Dataflow job.
     */
    bigqueryDetails?: BigQueryIODetails[];
    /**
     * Identification of a Datastore source used in the Dataflow job.
     */
    datastoreDetails?: DatastoreIODetails[];
    /**
     * Identification of a File source used in the Dataflow job.
     */
    fileDetails?: FileIODetails[];
    /**
     * Identification of a Pub/Sub source used in the Dataflow job.
     */
    pubsubDetails?: PubSubIODetails[];
    /**
     * The version of the SDK used to run the job.
     */
    sdkVersion?: SDKVersion;
    /**
     * Identification of a Spanner source used in the Dataflow job.
     */
    spannerDetails?: SpannerIODetails[];
    /**
     * List of display properties to help UI filter jobs.
     */
    userDisplayProperties?: Record<string, string>;
}
