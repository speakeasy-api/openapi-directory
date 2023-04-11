import { SpeakeasyBase } from "../../../internal/utils";
import { GooglePrivacyDlpV2BigQueryOptions } from "./googleprivacydlpv2bigqueryoptions";
import { GooglePrivacyDlpV2CloudStorageOptions } from "./googleprivacydlpv2cloudstorageoptions";
import { GooglePrivacyDlpV2DatastoreOptions } from "./googleprivacydlpv2datastoreoptions";
import { GooglePrivacyDlpV2HybridOptions } from "./googleprivacydlpv2hybridoptions";
import { GooglePrivacyDlpV2TimespanConfig } from "./googleprivacydlpv2timespanconfig";
/**
 * Shared message indicating Cloud storage type.
 */
export declare class GooglePrivacyDlpV2StorageConfig extends SpeakeasyBase {
    /**
     * Options defining BigQuery table and row identifiers.
     */
    bigQueryOptions?: GooglePrivacyDlpV2BigQueryOptions;
    /**
     * Options defining a file or a set of files within a Cloud Storage bucket.
     */
    cloudStorageOptions?: GooglePrivacyDlpV2CloudStorageOptions;
    /**
     * Options defining a data set within Google Cloud Datastore.
     */
    datastoreOptions?: GooglePrivacyDlpV2DatastoreOptions;
    /**
     * Configuration to control jobs where the content being inspected is outside of Google Cloud Platform.
     */
    hybridOptions?: GooglePrivacyDlpV2HybridOptions;
    /**
     * Configuration of the timespan of the items to include in scanning. Currently only supported when inspecting Cloud Storage and BigQuery.
     */
    timespanConfig?: GooglePrivacyDlpV2TimespanConfig;
}
