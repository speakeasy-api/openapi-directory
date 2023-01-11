import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class GetWebhookByIdPathParams extends SpeakeasyBase {
    webhookId: string;
}
export declare class GetWebhookByIdRequest extends SpeakeasyBase {
    pathParams: GetWebhookByIdPathParams;
}
export declare class GetWebhookByIdResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
    errorResponseBody?: shared.ErrorResponseBody;
    getWebhookByIdResponseBody?: shared.GetWebhookByIdResponseBody;
}
