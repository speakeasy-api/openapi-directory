import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class PostTargetsTargetIdWebhooksPathParams extends SpeakeasyBase {
    targetId: string;
}
export declare class PostTargetsTargetIdWebhooks400ApplicationJson extends SpeakeasyBase {
    lessThanFieldNameGreaterThan?: string[];
    nonFieldErrors?: string[];
}
export declare class PostTargetsTargetIdWebhooks401ApplicationJson extends SpeakeasyBase {
    detail?: string;
}
export declare class PostTargetsTargetIdWebhooks403ApplicationJson extends SpeakeasyBase {
    detail?: string;
}
export declare class PostTargetsTargetIdWebhooks404ApplicationJson extends SpeakeasyBase {
    detail?: string;
}
export declare class PostTargetsTargetIdWebhooksRequest extends SpeakeasyBase {
    pathParams: PostTargetsTargetIdWebhooksPathParams;
    request: shared.WebhookInput;
}
export declare class PostTargetsTargetIdWebhooksResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
    webhook?: shared.Webhook;
    postTargetsTargetIdWebhooks400ApplicationJSONObject?: PostTargetsTargetIdWebhooks400ApplicationJson;
    postTargetsTargetIdWebhooks401ApplicationJSONObject?: PostTargetsTargetIdWebhooks401ApplicationJson;
    postTargetsTargetIdWebhooks403ApplicationJSONObject?: PostTargetsTargetIdWebhooks403ApplicationJson;
    postTargetsTargetIdWebhooks404ApplicationJSONObject?: PostTargetsTargetIdWebhooks404ApplicationJson;
}
