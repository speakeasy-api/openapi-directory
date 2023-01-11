import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class SubmitApplicationDocumentPathParams extends SpeakeasyBase {
    applicationId: string;
    documentId: string;
    version: string;
}
export declare class SubmitApplicationDocumentRequest extends SpeakeasyBase {
    pathParams: SubmitApplicationDocumentPathParams;
    request: shared.ApplicationDocumentEditRequest;
}
export declare class SubmitApplicationDocumentResponse extends SpeakeasyBase {
    applicationDocumentResult?: shared.ApplicationDocumentResult;
    contentType: string;
    statusCode: number;
}
