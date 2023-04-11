import { SpeakeasyBase } from "../../../internal/utils";
import { GooglePrivacyDlpV2DocumentLocation } from "./googleprivacydlpv2documentlocation";
import { GooglePrivacyDlpV2ImageLocation } from "./googleprivacydlpv2imagelocation";
import { GooglePrivacyDlpV2MetadataLocation } from "./googleprivacydlpv2metadatalocation";
import { GooglePrivacyDlpV2RecordLocation } from "./googleprivacydlpv2recordlocation";
/**
 * Precise location of the finding within a document, record, image, or metadata container.
 */
export declare class GooglePrivacyDlpV2ContentLocation extends SpeakeasyBase {
    /**
     * Name of the container where the finding is located. The top level name is the source file name or table name. Names of some common storage containers are formatted as follows: * BigQuery tables: `{project_id}:{dataset_id}.{table_id}` * Cloud Storage files: `gs://{bucket}/{path}` * Datastore namespace: {namespace} Nested names could be absent if the embedded object has no string identifier (for example, an image contained within a document).
     */
    containerName?: string;
    /**
     * Finding container modification timestamp, if applicable. For Cloud Storage, this field contains the last file modification timestamp. For a BigQuery table, this field contains the last_modified_time property. For Datastore, this field isn't populated.
     */
    containerTimestamp?: string;
    /**
     * Finding container version, if available ("generation" for Cloud Storage).
     */
    containerVersion?: string;
    /**
     * Location of a finding within a document.
     */
    documentLocation?: GooglePrivacyDlpV2DocumentLocation;
    /**
     * Location of the finding within an image.
     */
    imageLocation?: GooglePrivacyDlpV2ImageLocation;
    /**
     * Metadata Location
     */
    metadataLocation?: GooglePrivacyDlpV2MetadataLocation;
    /**
     * Location of a finding within a row or record.
     */
    recordLocation?: GooglePrivacyDlpV2RecordLocation;
}
