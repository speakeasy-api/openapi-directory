import { SpeakeasyBase } from "../../../internal/utils";
import { AxiosResponse } from "axios";
export declare class RemovePagesV1RequestBodyFile extends SpeakeasyBase {
    content: Uint8Array;
    file: string;
}
export declare class RemovePagesV1RequestBody extends SpeakeasyBase {
    /**
     * The input PDF document
     */
    file: RemovePagesV1RequestBodyFile;
    /**
     * The first page of the range to remove from the PDF document. If empty, it defaults to the first page of the document.
     */
    firstPage?: number;
    /**
     * The last page of the range to remove from the PDF document. If empty, it defaults to the last page of the document.
     */
    lastPage?: number;
}
/**
 * Error
 */
export declare class RemovePagesV14XXApplicationProblemPlusJson extends SpeakeasyBase {
    errors?: Record<string, any>;
    status?: number;
    title?: string;
    type?: string;
}
export declare class RemovePagesV1Response extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
    rawResponse?: AxiosResponse;
    /**
     * The document was processed succesfully.
     */
    removePagesV1200ApplicationPdfBinaryString?: Uint8Array;
    /**
     * Error
     */
    removePagesV14XXApplicationProblemPlusJsonObject?: RemovePagesV14XXApplicationProblemPlusJson;
}
