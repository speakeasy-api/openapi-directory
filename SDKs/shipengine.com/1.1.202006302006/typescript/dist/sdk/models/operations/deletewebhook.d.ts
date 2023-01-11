import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class DeleteWebhookPathParams extends SpeakeasyBase {
    webhookId: string;
}
export declare class DeleteWebhookRequest extends SpeakeasyBase {
    pathParams: DeleteWebhookPathParams;
}
export declare class DeleteWebhookResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
    emptyResponseBody?: string;
    errorResponseBody?: shared.ErrorResponseBody;
}
