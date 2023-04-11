import { SpeakeasyBase } from "../../../internal/utils";
/**
 * Export destination of the data.Only gcs path is allowed in output_uri.
 */
export declare class GoogleCloudDatalabelingV1beta1GcsDestination extends SpeakeasyBase {
    /**
     * Required. The format of the gcs destination. Only "text/csv" and "application/json" are supported.
     */
    mimeType?: string;
    /**
     * Required. The output uri of destination file.
     */
    outputUri?: string;
}
