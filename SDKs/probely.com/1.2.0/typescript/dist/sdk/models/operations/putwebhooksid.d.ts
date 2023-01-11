import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class PutWebhooksIdPathParams extends SpeakeasyBase {
    id: string;
}
export declare class PutWebhooksId400ApplicationJson extends SpeakeasyBase {
    lessThanFieldNameGreaterThan?: string[];
    nonFieldErrors?: string[];
}
export declare class PutWebhooksId401ApplicationJson extends SpeakeasyBase {
    detail?: string;
}
export declare class PutWebhooksId403ApplicationJson extends SpeakeasyBase {
    detail?: string;
}
export declare class PutWebhooksId404ApplicationJson extends SpeakeasyBase {
    detail?: string;
}
export declare class PutWebhooksIdRequest extends SpeakeasyBase {
    pathParams: PutWebhooksIdPathParams;
    request: shared.WebhookInput;
}
export declare class PutWebhooksIdResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
    webhook?: shared.Webhook;
    putWebhooksId400ApplicationJSONObject?: PutWebhooksId400ApplicationJson;
    putWebhooksId401ApplicationJSONObject?: PutWebhooksId401ApplicationJson;
    putWebhooksId403ApplicationJSONObject?: PutWebhooksId403ApplicationJson;
    putWebhooksId404ApplicationJSONObject?: PutWebhooksId404ApplicationJson;
}
