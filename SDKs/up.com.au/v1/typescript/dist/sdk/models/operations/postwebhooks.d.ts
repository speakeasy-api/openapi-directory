import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class PostWebhooksRequest extends SpeakeasyBase {
    request?: shared.CreateWebhookRequest;
}
export declare class PostWebhooksResponse extends SpeakeasyBase {
    contentType: string;
    createWebhookResponse?: shared.CreateWebhookResponse;
    statusCode: number;
}
