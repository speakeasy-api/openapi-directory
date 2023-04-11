import { SpeakeasyBase } from "../../../internal/utils";
/**
 * Response of `GenerateDownloadUrl` method.
 */
export declare class GenerateDownloadUrlResponse extends SpeakeasyBase {
    /**
     * The generated Google Cloud Storage signed URL that should be used for function source code download.
     */
    downloadUrl?: string;
}
