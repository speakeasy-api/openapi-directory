import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
export declare class CompleteContinuousDocumentRequest extends SpeakeasyBase {
    /**
     * Document ID
     */
    documentId: number;
    /**
     * Continuous project ID
     */
    id: number;
}
export declare class CompleteContinuousDocumentResponse extends SpeakeasyBase {
    contentType: string;
    /**
     * ProjectNotFound FileNotFound DocumentNotFound
     */
    error?: shared.ErrorT;
    /**
     * Operation status
     */
    operationStatus?: shared.OperationStatus;
    statusCode: number;
    rawResponse?: AxiosResponse;
}
