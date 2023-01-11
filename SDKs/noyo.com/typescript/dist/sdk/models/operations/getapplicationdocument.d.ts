import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class GetApplicationDocumentPathParams extends SpeakeasyBase {
    applicationId: string;
    documentId: string;
}
export declare class GetApplicationDocumentRequest extends SpeakeasyBase {
    pathParams: GetApplicationDocumentPathParams;
}
export declare class GetApplicationDocumentResponse extends SpeakeasyBase {
    applicationDocumentResult?: shared.ApplicationDocumentResult;
    contentType: string;
    statusCode: number;
}
