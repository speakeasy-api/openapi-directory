import { SpeakeasyBase } from "../../../internal/utils";
import { AxiosResponse } from "axios";
export declare class RemovePasswordV1RequestBodyFile extends SpeakeasyBase {
    content: Uint8Array;
    file: string;
}
export declare class RemovePasswordV1RequestBody extends SpeakeasyBase {
    /**
     * The input PDF document
     */
    file: RemovePasswordV1RequestBodyFile;
    /**
     * The password required to open the file.
     */
    password: string;
}
/**
 * Error
 */
export declare class RemovePasswordV14XXApplicationProblemPlusJson extends SpeakeasyBase {
    errors?: Record<string, any>;
    status?: number;
    title?: string;
    type?: string;
}
export declare class RemovePasswordV1Response extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
    rawResponse?: AxiosResponse;
    /**
     * The document was processed succesfully.
     */
    removePasswordV1200ApplicationPdfBinaryString?: Uint8Array;
    /**
     * Error
     */
    removePasswordV14XXApplicationProblemPlusJsonObject?: RemovePasswordV14XXApplicationProblemPlusJson;
}
