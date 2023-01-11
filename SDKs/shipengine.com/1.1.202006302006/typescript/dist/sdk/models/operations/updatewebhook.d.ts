import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class UpdateWebhookPathParams extends SpeakeasyBase {
    webhookId: string;
}
export declare class UpdateWebhookRequest extends SpeakeasyBase {
    pathParams: UpdateWebhookPathParams;
    request: shared.UpdateWebhookRequestBody;
}
export declare class UpdateWebhookResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
    emptyResponseBody?: string;
    errorResponseBody?: shared.ErrorResponseBody;
}
