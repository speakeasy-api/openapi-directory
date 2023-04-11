import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
export declare class CreateApplicationDocumentRequest extends SpeakeasyBase {
    applicationDocumentCreateRequest: shared.ApplicationDocumentCreateRequest;
    /**
     * The unique identifier of the application in Noyo
     */
    applicationId: string;
}
export declare class CreateApplicationDocumentResponse extends SpeakeasyBase {
    /**
     * Successful Response - Returns the new Application Document
     */
    applicationDocumentResult?: shared.ApplicationDocumentResult;
    contentType: string;
    statusCode: number;
    rawResponse?: AxiosResponse;
}
