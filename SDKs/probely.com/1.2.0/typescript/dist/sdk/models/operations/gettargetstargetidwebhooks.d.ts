import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class GetTargetsTargetIdWebhooksPathParams extends SpeakeasyBase {
    targetId: string;
}
export declare class GetTargetsTargetIdWebhooks200ApplicationJson extends SpeakeasyBase {
    count?: number;
    length?: number;
    page?: number;
    pageTotal?: number;
    results?: shared.Webhook[];
}
export declare class GetTargetsTargetIdWebhooks401ApplicationJson extends SpeakeasyBase {
    detail?: string;
}
export declare class GetTargetsTargetIdWebhooks403ApplicationJson extends SpeakeasyBase {
    detail?: string;
}
export declare class GetTargetsTargetIdWebhooksRequest extends SpeakeasyBase {
    pathParams: GetTargetsTargetIdWebhooksPathParams;
}
export declare class GetTargetsTargetIdWebhooksResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
    getTargetsTargetIdWebhooks200ApplicationJSONObject?: GetTargetsTargetIdWebhooks200ApplicationJson;
    getTargetsTargetIdWebhooks401ApplicationJSONObject?: GetTargetsTargetIdWebhooks401ApplicationJson;
    getTargetsTargetIdWebhooks403ApplicationJSONObject?: GetTargetsTargetIdWebhooks403ApplicationJson;
}
