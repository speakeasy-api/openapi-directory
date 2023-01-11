import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class PutTargetsTargetIdWebhooksIdPathParams extends SpeakeasyBase {
    id: string;
    targetId: string;
}
export declare class PutTargetsTargetIdWebhooksId400ApplicationJson extends SpeakeasyBase {
    lessThanFieldNameGreaterThan?: string[];
    nonFieldErrors?: string[];
}
export declare class PutTargetsTargetIdWebhooksId401ApplicationJson extends SpeakeasyBase {
    detail?: string;
}
export declare class PutTargetsTargetIdWebhooksId403ApplicationJson extends SpeakeasyBase {
    detail?: string;
}
export declare class PutTargetsTargetIdWebhooksId404ApplicationJson extends SpeakeasyBase {
    detail?: string;
}
export declare class PutTargetsTargetIdWebhooksIdRequest extends SpeakeasyBase {
    pathParams: PutTargetsTargetIdWebhooksIdPathParams;
    request: shared.WebhookInput;
}
export declare class PutTargetsTargetIdWebhooksIdResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
    webhook?: shared.Webhook;
    putTargetsTargetIdWebhooksId400ApplicationJSONObject?: PutTargetsTargetIdWebhooksId400ApplicationJson;
    putTargetsTargetIdWebhooksId401ApplicationJSONObject?: PutTargetsTargetIdWebhooksId401ApplicationJson;
    putTargetsTargetIdWebhooksId403ApplicationJSONObject?: PutTargetsTargetIdWebhooksId403ApplicationJson;
    putTargetsTargetIdWebhooksId404ApplicationJSONObject?: PutTargetsTargetIdWebhooksId404ApplicationJson;
}
