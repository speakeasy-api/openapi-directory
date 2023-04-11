import { SpeakeasyBase } from "../../../internal/utils";
/**
 * A file to be uploaded as dispute evidence.
 */
export declare class DisputeEvidenceFile extends SpeakeasyBase {
    /**
     * The file name including the file extension. For example: "receipt.tiff".
     */
    filename?: string;
    /**
     * Dispute evidence files must be application/pdf, image/heic, image/heif, image/jpeg, image/png, or image/tiff formats.
     */
    filetype?: string;
}
