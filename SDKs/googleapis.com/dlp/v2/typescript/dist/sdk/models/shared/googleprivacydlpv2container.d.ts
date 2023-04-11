import { SpeakeasyBase } from "../../../internal/utils";
/**
 * Represents a container that may contain DLP findings. Examples of a container include a file, table, or database record.
 */
export declare class GooglePrivacyDlpV2Container extends SpeakeasyBase {
    /**
     * A string representation of the full container name. Examples: - BigQuery: 'Project:DataSetId.TableId' - Cloud Storage: 'gs://Bucket/folders/filename.txt'
     */
    fullPath?: string;
    /**
     * Project where the finding was found. Can be different from the project that owns the finding.
     */
    projectId?: string;
    /**
     * The rest of the path after the root. Examples: - For BigQuery table `project_id:dataset_id.table_id`, the relative path is `table_id` - For Cloud Storage file `gs://bucket/folder/filename.txt`, the relative path is `folder/filename.txt`
     */
    relativePath?: string;
    /**
     * The root of the container. Examples: - For BigQuery table `project_id:dataset_id.table_id`, the root is `dataset_id` - For Cloud Storage file `gs://bucket/folder/filename.txt`, the root is `gs://bucket`
     */
    rootPath?: string;
    /**
     * Container type, for example BigQuery or Cloud Storage.
     */
    type?: string;
    /**
     * Findings container modification timestamp, if applicable. For Cloud Storage, this field contains the last file modification timestamp. For a BigQuery table, this field contains the last_modified_time property. For Datastore, this field isn't populated.
     */
    updateTime?: string;
    /**
     * Findings container version, if available ("generation" for Cloud Storage).
     */
    version?: string;
}
