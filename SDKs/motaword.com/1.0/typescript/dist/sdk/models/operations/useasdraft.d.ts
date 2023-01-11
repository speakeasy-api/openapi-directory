import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class UseAsDraftPathParams extends SpeakeasyBase {
    documentId: number;
}
export declare class UseAsDraftRequest extends SpeakeasyBase {
    pathParams: UseAsDraftPathParams;
    request?: shared.UseAsDraftPayload;
}
export declare class UseAsDraftResponse extends SpeakeasyBase {
    contentType: string;
    operationStatus?: shared.OperationStatus;
    statusCode: number;
}
