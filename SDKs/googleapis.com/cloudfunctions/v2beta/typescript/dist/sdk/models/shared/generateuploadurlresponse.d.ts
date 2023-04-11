import { SpeakeasyBase } from "../../../internal/utils";
import { StorageSource } from "./storagesource";
/**
 * Response of `GenerateSourceUploadUrl` method.
 */
export declare class GenerateUploadUrlResponse extends SpeakeasyBase {
    /**
     * Location of the source in an archive file in Google Cloud Storage.
     */
    storageSource?: StorageSource;
    /**
     * The generated Google Cloud Storage signed URL that should be used for a function source code upload. The uploaded file should be a zip archive which contains a function.
     */
    uploadUrl?: string;
}
