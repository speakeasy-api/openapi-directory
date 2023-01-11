import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class PatchWebhooksIdPathParams extends SpeakeasyBase {
    id: string;
}
export declare class PatchWebhooksId400ApplicationJson extends SpeakeasyBase {
    lessThanFieldNameGreaterThan?: string[];
    nonFieldErrors?: string[];
}
export declare class PatchWebhooksId401ApplicationJson extends SpeakeasyBase {
    detail?: string;
}
export declare class PatchWebhooksId403ApplicationJson extends SpeakeasyBase {
    detail?: string;
}
export declare class PatchWebhooksId404ApplicationJson extends SpeakeasyBase {
    detail?: string;
}
export declare class PatchWebhooksIdRequest extends SpeakeasyBase {
    pathParams: PatchWebhooksIdPathParams;
    request: shared.WebhookInput;
}
export declare class PatchWebhooksIdResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
    webhook?: shared.Webhook;
    patchWebhooksId400ApplicationJSONObject?: PatchWebhooksId400ApplicationJson;
    patchWebhooksId401ApplicationJSONObject?: PatchWebhooksId401ApplicationJson;
    patchWebhooksId403ApplicationJSONObject?: PatchWebhooksId403ApplicationJson;
    patchWebhooksId404ApplicationJSONObject?: PatchWebhooksId404ApplicationJson;
}
