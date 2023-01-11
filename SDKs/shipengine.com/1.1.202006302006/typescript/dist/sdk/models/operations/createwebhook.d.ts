import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class CreateWebhookRequest extends SpeakeasyBase {
    request: shared.CreateWebhookRequestBody;
}
export declare class CreateWebhookResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
    createWebhookResponseBody?: shared.CreateWebhookResponseBody;
    errorResponseBody?: shared.ErrorResponseBody;
}
