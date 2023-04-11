import { SpeakeasyBase } from "../../../internal/utils";
import { AxiosResponse } from "axios";
/**
 * The algorithm used to encrypt the PDF document.
 */
export declare enum AddRestrictionsV1RequestBodyEncryptionAlgorithmEnum {
    Aes128 = "AES-128",
    Aes256 = "AES-256"
}
export declare class AddRestrictionsV1RequestBodyFile extends SpeakeasyBase {
    content: Uint8Array;
    file: string;
}
export declare class AddRestrictionsV1RequestBody extends SpeakeasyBase {
    /**
     * If false, accessibility programs can't read the text or images of the document.
     */
    allowAccessibility?: boolean;
    /**
     * If false, the user can't assemble or manipulate the document.
     */
    allowAssembleDocument?: boolean;
    /**
     * If false, the user can't change the content of the document.
     */
    allowChangeContent?: boolean;
    /**
     * If false, the user can't add, edit or modify annotations or fill form fields.
     */
    allowCommentAndFillForm?: boolean;
    /**
     * If false, the user can't copy text and images to the clipboard.
     */
    allowCopyContent?: boolean;
    /**
     * If false, the user can't fill forms fields.
     */
    allowFillForm?: boolean;
    /**
     * If false, the user can't print the document.
     */
    allowPrint?: boolean;
    /**
     * If false, the user can't print the document in high resolution.
     */
    allowPrintHighResolution?: boolean;
    /**
     * The algorithm used to encrypt the PDF document.
     */
    encryptionAlgorithm?: AddRestrictionsV1RequestBodyEncryptionAlgorithmEnum;
    /**
     * The input PDF document
     */
    file: AddRestrictionsV1RequestBodyFile;
    /**
     * The password required to open and change permissions of the PDF document.
     */
    ownerPassword: string;
    /**
     * The password required to open the PDF document. If the `user_password` is not set, the user will be able to open the document without a password.
     */
    userPassword?: string;
}
/**
 * Error
 */
export declare class AddRestrictionsV14XXApplicationProblemPlusJson extends SpeakeasyBase {
    errors?: Record<string, any>;
    status?: number;
    title?: string;
    type?: string;
}
export declare class AddRestrictionsV1Response extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
    rawResponse?: AxiosResponse;
    /**
     * The document was processed succesfully.
     */
    addRestrictionsV1200ApplicationPdfBinaryString?: Uint8Array;
    /**
     * Error
     */
    addRestrictionsV14XXApplicationProblemPlusJsonObject?: AddRestrictionsV14XXApplicationProblemPlusJson;
}
