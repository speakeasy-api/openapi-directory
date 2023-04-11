import { SpeakeasyBase } from "../../../internal/utils";
import { AxiosResponse } from "axios";
export declare class RemoveRestrictionsV1RequestBodyFile extends SpeakeasyBase {
    content: Uint8Array;
    file: string;
}
export declare class RemoveRestrictionsV1RequestBody extends SpeakeasyBase {
    /**
     * The input PDF document
     */
    file: RemoveRestrictionsV1RequestBodyFile;
}
/**
 * Error
 */
export declare class RemoveRestrictionsV14XXApplicationProblemPlusJson extends SpeakeasyBase {
    errors?: Record<string, any>;
    status?: number;
    title?: string;
    type?: string;
}
export declare class RemoveRestrictionsV1Response extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
    rawResponse?: AxiosResponse;
    /**
     * The document was processed succesfully.
     */
    removeRestrictionsV1200ApplicationPdfBinaryString?: Uint8Array;
    /**
     * Error
     */
    removeRestrictionsV14XXApplicationProblemPlusJsonObject?: RemoveRestrictionsV14XXApplicationProblemPlusJson;
}
