import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class CreateApplicationDocumentPathParams extends SpeakeasyBase {
    applicationId: string;
}
export declare class CreateApplicationDocumentRequest extends SpeakeasyBase {
    pathParams: CreateApplicationDocumentPathParams;
    request: shared.ApplicationDocumentCreateRequest;
}
export declare class CreateApplicationDocumentResponse extends SpeakeasyBase {
    applicationDocumentResult?: shared.ApplicationDocumentResult;
    contentType: string;
    statusCode: number;
}
