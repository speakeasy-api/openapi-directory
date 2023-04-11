import { SpeakeasyBase } from "../../../internal/utils";
/**
 * Represents the parameters required to perform a batch upload
 */
export declare class BatchUploadInput extends SpeakeasyBase {
    /**
     * Uploaded file name
     */
    file: Uint8Array[];
}
