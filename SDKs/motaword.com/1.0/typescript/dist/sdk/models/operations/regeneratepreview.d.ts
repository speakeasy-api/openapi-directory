import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
export declare class RegeneratePreviewRequest extends SpeakeasyBase {
    /**
     * Document ID
     */
    documentId: number;
}
export declare class RegeneratePreviewResponse extends SpeakeasyBase {
    contentType: string;
    /**
     * RegeneratePreviewResponse
     */
    regeneratePreviewResponse?: shared.RegeneratePreviewResponse;
    statusCode: number;
    rawResponse?: AxiosResponse;
}
