import { SpeakeasyBase } from "../../../internal/utils";
import { AxiosResponse } from "axios";
export declare class RemoveSignaturesV1RequestBodyFile extends SpeakeasyBase {
    content: Uint8Array;
    file: string;
}
export declare class RemoveSignaturesV1RequestBody extends SpeakeasyBase {
    /**
     * The input PDF document
     */
    file: RemoveSignaturesV1RequestBodyFile;
}
/**
 * Error
 */
export declare class RemoveSignaturesV14XXApplicationProblemPlusJson extends SpeakeasyBase {
    errors?: Record<string, any>;
    status?: number;
    title?: string;
    type?: string;
}
export declare class RemoveSignaturesV1Response extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
    rawResponse?: AxiosResponse;
    /**
     * The document was processed succesfully.
     */
    removeSignaturesV1200ApplicationPdfBinaryString?: Uint8Array;
    /**
     * Error
     */
    removeSignaturesV14XXApplicationProblemPlusJsonObject?: RemoveSignaturesV14XXApplicationProblemPlusJson;
}
