import { SpeakeasyBase } from "../../../internal/utils";
/**
 * The file type of source file.
 */
export declare enum FileContentBufferFileTypeEnum {
    Bin = "BIN",
    Undefined = "UNDEFINED",
    X509 = "X509"
}
export declare class FileContentBuffer extends SpeakeasyBase {
    /**
     * The raw content in the secure keys file.
     */
    content?: string;
    /**
     * The file type of source file.
     */
    fileType?: FileContentBufferFileTypeEnum;
}
