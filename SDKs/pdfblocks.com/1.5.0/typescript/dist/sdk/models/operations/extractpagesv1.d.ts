import { SpeakeasyBase } from "../../../internal/utils";
import { AxiosResponse } from "axios";
export declare class ExtractPagesV1RequestBodyFile extends SpeakeasyBase {
    content: Uint8Array;
    file: string;
}
export declare class ExtractPagesV1RequestBody extends SpeakeasyBase {
    /**
     * The input PDF document
     */
    file: ExtractPagesV1RequestBodyFile;
    /**
     * The first page of the range to extract. If empty, it defaults to the first page of the PDF document.
     */
    firstPage?: number;
    /**
     * The last page of the range to extract. If empty, it defaults to the last page of the PDF document.
     */
    lastPage?: number;
}
/**
 * Error
 */
export declare class ExtractPagesV14XXApplicationProblemPlusJson extends SpeakeasyBase {
    errors?: Record<string, any>;
    status?: number;
    title?: string;
    type?: string;
}
export declare class ExtractPagesV1Response extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
    rawResponse?: AxiosResponse;
    /**
     * The document was processed succesfully.
     */
    extractPagesV1200ApplicationPdfBinaryString?: Uint8Array;
    /**
     * Error
     */
    extractPagesV14XXApplicationProblemPlusJsonObject?: ExtractPagesV14XXApplicationProblemPlusJson;
}
