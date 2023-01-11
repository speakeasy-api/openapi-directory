import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class GetTargetsTargetIdWebhooksIdPathParams extends SpeakeasyBase {
    id: string;
    targetId: string;
}
export declare class GetTargetsTargetIdWebhooksId401ApplicationJson extends SpeakeasyBase {
    detail?: string;
}
export declare class GetTargetsTargetIdWebhooksId403ApplicationJson extends SpeakeasyBase {
    detail?: string;
}
export declare class GetTargetsTargetIdWebhooksIdRequest extends SpeakeasyBase {
    pathParams: GetTargetsTargetIdWebhooksIdPathParams;
}
export declare class GetTargetsTargetIdWebhooksIdResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
    webhook?: shared.Webhook;
    getTargetsTargetIdWebhooksId401ApplicationJSONObject?: GetTargetsTargetIdWebhooksId401ApplicationJson;
    getTargetsTargetIdWebhooksId403ApplicationJSONObject?: GetTargetsTargetIdWebhooksId403ApplicationJson;
}
