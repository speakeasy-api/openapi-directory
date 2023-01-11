import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class PatchTargetsTargetIdWebhooksIdPathParams extends SpeakeasyBase {
    id: string;
    targetId: string;
}
export declare class PatchTargetsTargetIdWebhooksId400ApplicationJson extends SpeakeasyBase {
    lessThanFieldNameGreaterThan?: string[];
    nonFieldErrors?: string[];
}
export declare class PatchTargetsTargetIdWebhooksId401ApplicationJson extends SpeakeasyBase {
    detail?: string;
}
export declare class PatchTargetsTargetIdWebhooksId403ApplicationJson extends SpeakeasyBase {
    detail?: string;
}
export declare class PatchTargetsTargetIdWebhooksId404ApplicationJson extends SpeakeasyBase {
    detail?: string;
}
export declare class PatchTargetsTargetIdWebhooksIdRequest extends SpeakeasyBase {
    pathParams: PatchTargetsTargetIdWebhooksIdPathParams;
    request: shared.WebhookInput;
}
export declare class PatchTargetsTargetIdWebhooksIdResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
    webhook?: shared.Webhook;
    patchTargetsTargetIdWebhooksId400ApplicationJSONObject?: PatchTargetsTargetIdWebhooksId400ApplicationJson;
    patchTargetsTargetIdWebhooksId401ApplicationJSONObject?: PatchTargetsTargetIdWebhooksId401ApplicationJson;
    patchTargetsTargetIdWebhooksId403ApplicationJSONObject?: PatchTargetsTargetIdWebhooksId403ApplicationJson;
    patchTargetsTargetIdWebhooksId404ApplicationJSONObject?: PatchTargetsTargetIdWebhooksId404ApplicationJson;
}
