import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
export declare class EditApplicationDocumentRequest extends SpeakeasyBase {
    applicationDocumentEditRequest: shared.ApplicationDocumentEditRequest;
    /**
     * The unique identifier of the application in Noyo
     */
    applicationId: string;
    /**
     * The unique identifier of the application document in Noyo
     */
    documentId: string;
    /**
     * The current version identifier of the application document
     */
    version: string;
}
export declare class EditApplicationDocumentResponse extends SpeakeasyBase {
    /**
     * Successful Response - Returns the updated Application Document
     */
    applicationDocumentResult?: shared.ApplicationDocumentResult;
    contentType: string;
    statusCode: number;
    rawResponse?: AxiosResponse;
}
