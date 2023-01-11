import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class EditApplicationDocumentPathParams extends SpeakeasyBase {
    applicationId: string;
    documentId: string;
    version: string;
}
export declare class EditApplicationDocumentRequest extends SpeakeasyBase {
    pathParams: EditApplicationDocumentPathParams;
    request: shared.ApplicationDocumentEditRequest;
}
export declare class EditApplicationDocumentResponse extends SpeakeasyBase {
    applicationDocumentResult?: shared.ApplicationDocumentResult;
    contentType: string;
    statusCode: number;
}
