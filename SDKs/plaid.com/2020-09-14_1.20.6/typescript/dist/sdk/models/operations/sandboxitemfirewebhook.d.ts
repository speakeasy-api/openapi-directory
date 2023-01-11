import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class SandboxItemFireWebhookRequest extends SpeakeasyBase {
    request: shared.SandboxItemFireWebhookRequest;
}
export declare class SandboxItemFireWebhookResponse extends SpeakeasyBase {
    contentType: string;
    error?: Record<string, any>;
    sandboxItemFireWebhookResponse?: Record<string, any>;
    statusCode: number;
}
