import { SpeakeasyBase } from "../../../internal/utils";
import { CloudStorageFile } from "./cloudstoragefile";
/**
 * Export sink for Cloud Storage files.
 */
export declare class CloudStorageSink extends SpeakeasyBase {
    /**
     * Output only. The exported files in Cloud Storage.
     */
    files?: CloudStorageFile[];
}
