import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class SandboxBankTransferFireWebhookRequest extends SpeakeasyBase {
    request: shared.SandboxBankTransferFireWebhookRequest;
}
export declare class SandboxBankTransferFireWebhookResponse extends SpeakeasyBase {
    contentType: string;
    error?: Record<string, any>;
    sandboxBankTransferFireWebhookResponse?: shared.SandboxBankTransferFireWebhookResponse;
    statusCode: number;
}
