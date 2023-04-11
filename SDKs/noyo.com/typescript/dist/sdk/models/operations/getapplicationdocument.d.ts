import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
export declare class GetApplicationDocumentRequest extends SpeakeasyBase {
    /**
     * The unique identifier of the application document in Noyo
     */
    applicationId: string;
    /**
     * The unique identifier of the document
     */
    documentId: string;
}
export declare class GetApplicationDocumentResponse extends SpeakeasyBase {
    /**
     * Successful Response - Returns a single Application Document
     */
    applicationDocumentResult?: shared.ApplicationDocumentResult;
    contentType: string;
    statusCode: number;
    rawResponse?: AxiosResponse;
}
