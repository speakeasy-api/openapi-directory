import { SpeakeasyBase } from "../../../internal/utils";
/**
 * Info for a single file submitted to a file upload question.
 */
export declare class FileUploadAnswer extends SpeakeasyBase {
    /**
     * Output only. The ID of the Google Drive file.
     */
    fileId?: string;
    /**
     * Output only. The file name, as stored in Google Drive on upload.
     */
    fileName?: string;
    /**
     * Output only. The MIME type of the file, as stored in Google Drive on upload.
     */
    mimeType?: string;
}
