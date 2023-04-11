import { SpeakeasyBase } from "../../../internal/utils";
import { AxiosResponse } from "axios";
export declare class MergeDocumentsV1RequestBody extends SpeakeasyBase {
    /**
     * The array of PDF documents. PDF documents will be merged in the same order they are inserted into this array.
     */
    file?: Uint8Array[];
}
/**
 * Error
 */
export declare class MergeDocumentsV14XXApplicationProblemPlusJson extends SpeakeasyBase {
    errors?: Record<string, any>;
    status?: number;
    title?: string;
    type?: string;
}
export declare class MergeDocumentsV1Response extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
    rawResponse?: AxiosResponse;
    /**
     * The document was processed succesfully.
     */
    mergeDocumentsV1200ApplicationPdfBinaryString?: Uint8Array;
    /**
     * Error
     */
    mergeDocumentsV14XXApplicationProblemPlusJsonObject?: MergeDocumentsV14XXApplicationProblemPlusJson;
}
