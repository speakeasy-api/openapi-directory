import { SpeakeasyBase } from "../../../internal/utils";
export declare enum FileUploadQuestionTypesEnum {
    FileTypeUnspecified = "FILE_TYPE_UNSPECIFIED",
    Any = "ANY",
    Document = "DOCUMENT",
    Presentation = "PRESENTATION",
    Spreadsheet = "SPREADSHEET",
    Drawing = "DRAWING",
    Pdf = "PDF",
    Image = "IMAGE",
    Video = "VIDEO",
    Audio = "AUDIO"
}
/**
 * A file upload question. The API currently does not support creating file upload questions.
 */
export declare class FileUploadQuestion extends SpeakeasyBase {
    /**
     * Required. The ID of the Drive folder where uploaded files are stored.
     */
    folderId?: string;
    /**
     * Maximum number of bytes allowed for any single file uploaded to this question.
     */
    maxFileSize?: string;
    /**
     * Maximum number of files that can be uploaded for this question in a single response.
     */
    maxFiles?: number;
    /**
     * File types accepted by this question.
     */
    types?: FileUploadQuestionTypesEnum[];
}
