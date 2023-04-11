import { SpeakeasyBase } from "../../../internal/utils";
import { GooglePrivacyDlpV2BigQueryField } from "./googleprivacydlpv2bigqueryfield";
import { GooglePrivacyDlpV2CloudStorageFileSet } from "./googleprivacydlpv2cloudstoragefileset";
import { GooglePrivacyDlpV2CloudStoragePath } from "./googleprivacydlpv2cloudstoragepath";
/**
 * Configuration for a custom dictionary created from a data source of any size up to the maximum size defined in the [limits](https://cloud.google.com/dlp/limits) page. The artifacts of dictionary creation are stored in the specified Cloud Storage location. Consider using `CustomInfoType.Dictionary` for smaller dictionaries that satisfy the size requirements.
 */
export declare class GooglePrivacyDlpV2LargeCustomDictionaryConfig extends SpeakeasyBase {
    /**
     * Message defining a field of a BigQuery table.
     */
    bigQueryField?: GooglePrivacyDlpV2BigQueryField;
    /**
     * Message representing a set of files in Cloud Storage.
     */
    cloudStorageFileSet?: GooglePrivacyDlpV2CloudStorageFileSet;
    /**
     * Message representing a single file or path in Cloud Storage.
     */
    outputPath?: GooglePrivacyDlpV2CloudStoragePath;
}
