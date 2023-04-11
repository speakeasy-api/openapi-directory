import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
export declare class GetDocumentProgressRequest extends SpeakeasyBase {
    /**
     * Document ID
     */
    documentId: number;
}
export declare class GetDocumentProgressResponse extends SpeakeasyBase {
    contentType: string;
    /**
     * DocumentNotFound
     */
    error?: shared.ErrorT;
    /**
     * Progress information
     */
    progress?: shared.Progress;
    statusCode: number;
    rawResponse?: AxiosResponse;
}
