import { SpeakeasyBase } from "../../../internal/utils";
import { Hash } from "./hash";
import { VirusScan } from "./virusscan";
/**
 * The mime type validation check to see if the extension of this file matches it's content. Can be PASSED or FAILED
 */
export declare enum FileMimeCheckEnum {
    Passed = "PASSED",
    Failed = "FAILED"
}
/**
 * The file ids of the uploaded file
 */
export declare class File extends SpeakeasyBase {
    /**
     * The internet media type of the file
     */
    contentType?: string;
    /**
     * The id of the uploaded file
     */
    fileId: string;
    /**
     * The path where the file can be located.
     */
    fileUrl?: string;
    /**
     * The hashes requested for the file.
     */
    hash?: Hash;
    /**
     * The mime type validation check to see if the extension of this file matches it's content. Can be PASSED or FAILED
     */
    mimeCheck?: FileMimeCheckEnum;
    /**
     * The name of the uploaded file
     */
    name: string;
    /**
     * The number of bytes in the uploaded file
     */
    size: number;
    /**
     * The time in milliseconds when the file was uploaded
     */
    uploadDate: number;
    /**
     * The virus scan results for this file
     */
    virusScan?: VirusScan;
}
