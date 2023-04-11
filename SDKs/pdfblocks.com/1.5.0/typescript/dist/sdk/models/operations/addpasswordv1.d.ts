import { SpeakeasyBase } from "../../../internal/utils";
import { AxiosResponse } from "axios";
/**
 * The algorithm used to encrypt the PDF document.
 */
export declare enum AddPasswordV1RequestBodyEncryptionAlgorithmEnum {
    Aes128 = "AES-128",
    Aes256 = "AES-256"
}
export declare class AddPasswordV1RequestBodyFile extends SpeakeasyBase {
    content: Uint8Array;
    file: string;
}
export declare class AddPasswordV1RequestBody extends SpeakeasyBase {
    /**
     * The algorithm used to encrypt the PDF document.
     */
    encryptionAlgorithm?: AddPasswordV1RequestBodyEncryptionAlgorithmEnum;
    /**
     * The input PDF document
     */
    file: AddPasswordV1RequestBodyFile;
    /**
     * The password required to open the file.
     */
    password: string;
}
/**
 * Error
 */
export declare class AddPasswordV14XXApplicationProblemPlusJson extends SpeakeasyBase {
    errors?: Record<string, any>;
    status?: number;
    title?: string;
    type?: string;
}
export declare class AddPasswordV1Response extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
    rawResponse?: AxiosResponse;
    /**
     * The document was processed succesfully.
     */
    addPasswordV1200ApplicationPdfBinaryString?: Uint8Array;
    /**
     * Error
     */
    addPasswordV14XXApplicationProblemPlusJsonObject?: AddPasswordV14XXApplicationProblemPlusJson;
}
