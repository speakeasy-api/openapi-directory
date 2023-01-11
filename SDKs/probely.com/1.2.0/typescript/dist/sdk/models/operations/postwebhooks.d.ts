import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class PostWebhooks400ApplicationJson extends SpeakeasyBase {
    lessThanFieldNameGreaterThan?: string[];
    nonFieldErrors?: string[];
}
export declare class PostWebhooks401ApplicationJson extends SpeakeasyBase {
    detail?: string;
}
export declare class PostWebhooks403ApplicationJson extends SpeakeasyBase {
    detail?: string;
}
export declare class PostWebhooks404ApplicationJson extends SpeakeasyBase {
    detail?: string;
}
export declare class PostWebhooksRequest extends SpeakeasyBase {
    request: shared.WebhookInput;
}
export declare class PostWebhooksResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
    webhook?: shared.Webhook;
    postWebhooks400ApplicationJSONObject?: PostWebhooks400ApplicationJson;
    postWebhooks401ApplicationJSONObject?: PostWebhooks401ApplicationJson;
    postWebhooks403ApplicationJSONObject?: PostWebhooks403ApplicationJson;
    postWebhooks404ApplicationJSONObject?: PostWebhooks404ApplicationJson;
}
