import { SpeakeasyBase } from "../../../internal/utils";
/**
 * Source of the Cloud Storage file to be imported.
 */
export declare class GoogleCloudDatalabelingV1beta1GcsSource extends SpeakeasyBase {
    /**
     * Required. The input URI of source file. This must be a Cloud Storage path (`gs://...`).
     */
    inputUri?: string;
    /**
     * Required. The format of the source file. Only "text/csv" is supported.
     */
    mimeType?: string;
}
