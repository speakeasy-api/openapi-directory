import { SpeakeasyBase } from "../../../internal/utils";
/**
 * A storage location within Google cloud storage (GCS).
 */
export declare class GoogleCloudStorage extends SpeakeasyBase {
    /**
     * Required. The path to a directory in GCS that will eventually contain the results for this test. The requesting user must have write access on the bucket in the supplied path.
     */
    gcsPath?: string;
}
