import { SpeakeasyBase } from "../../../internal/utils";
import { AxiosResponse } from "axios";
export declare class ReversePagesV1RequestBodyFile extends SpeakeasyBase {
    content: Uint8Array;
    file: string;
}
export declare class ReversePagesV1RequestBody extends SpeakeasyBase {
    /**
     * The input PDF document
     */
    file: ReversePagesV1RequestBodyFile;
}
/**
 * Error
 */
export declare class ReversePagesV14XXApplicationProblemPlusJson extends SpeakeasyBase {
    errors?: Record<string, any>;
    status?: number;
    title?: string;
    type?: string;
}
export declare class ReversePagesV1Response extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
    rawResponse?: AxiosResponse;
    /**
     * The document was processed succesfully.
     */
    reversePagesV1200ApplicationPdfBinaryString?: Uint8Array;
    /**
     * Error
     */
    reversePagesV14XXApplicationProblemPlusJsonObject?: ReversePagesV14XXApplicationProblemPlusJson;
}
