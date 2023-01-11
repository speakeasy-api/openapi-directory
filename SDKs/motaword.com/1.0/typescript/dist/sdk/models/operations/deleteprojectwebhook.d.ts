import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class DeleteProjectWebhookPathParams extends SpeakeasyBase {
    id: number;
}
export declare class DeleteProjectWebhookRequest extends SpeakeasyBase {
    pathParams: DeleteProjectWebhookPathParams;
}
export declare class DeleteProjectWebhookResponse extends SpeakeasyBase {
    contentType: string;
    error?: shared.ErrorT;
    operationStatus?: shared.OperationStatus;
    statusCode: number;
}
