import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
export declare class GetDocumentRequest extends SpeakeasyBase {
    /**
     * Document ID or filename
     */
    documentId: string;
}
export declare class GetDocumentResponse extends SpeakeasyBase {
    contentType: string;
    /**
     * Document
     */
    continuousProjectDocument?: shared.ContinuousProjectDocument;
    statusCode: number;
    rawResponse?: AxiosResponse;
}
