import { SpeakeasyBase } from "../../../internal/utils";
/**
 * Defines flags that are used to run the diagnostic tool
 */
export declare class DiagnosticConfig extends SpeakeasyBase {
    /**
     * Optional. Enables flag to copy all `/home/jupyter` folder contents
     */
    copyHomeFilesFlagEnabled?: boolean;
    /**
     * Required. User Cloud Storage bucket location (REQUIRED). Must be formatted with path prefix (`gs://$GCS_BUCKET`). Permissions: User Managed Notebooks: - storage.buckets.writer: Must be given to the project's service account attached to VM. Google Managed Notebooks: - storage.buckets.writer: Must be given to the project's service account or user credentials attached to VM depending on authentication mode. Cloud Storage bucket Log file will be written to `gs://$GCS_BUCKET/$RELATIVE_PATH/$VM_DATE_$TIME.tar.gz`
     */
    gcsBucket?: string;
    /**
     * Optional. Enables flag to capture packets from the instance for 30 seconds
     */
    packetCaptureFlagEnabled?: boolean;
    /**
     * Optional. Defines the relative storage path in the Cloud Storage bucket where the diagnostic logs will be written: Default path will be the root directory of the Cloud Storage bucket (`gs://$GCS_BUCKET/$DATE_$TIME.tar.gz`) Example of full path where Log file will be written: `gs://$GCS_BUCKET/$RELATIVE_PATH/`
     */
    relativePath?: string;
    /**
     * Optional. Enables flag to repair service for instance
     */
    repairFlagEnabled?: boolean;
}
