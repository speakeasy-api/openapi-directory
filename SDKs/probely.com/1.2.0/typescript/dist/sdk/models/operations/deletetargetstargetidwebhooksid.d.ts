import { SpeakeasyBase } from "../../../internal/utils";
export declare class DeleteTargetsTargetIdWebhooksIdPathParams extends SpeakeasyBase {
    id: string;
    targetId: string;
}
export declare class DeleteTargetsTargetIdWebhooksId401ApplicationJson extends SpeakeasyBase {
    detail?: string;
}
export declare class DeleteTargetsTargetIdWebhooksId403ApplicationJson extends SpeakeasyBase {
    detail?: string;
}
export declare class DeleteTargetsTargetIdWebhooksId404ApplicationJson extends SpeakeasyBase {
    detail?: string;
}
export declare class DeleteTargetsTargetIdWebhooksIdRequest extends SpeakeasyBase {
    pathParams: DeleteTargetsTargetIdWebhooksIdPathParams;
}
export declare class DeleteTargetsTargetIdWebhooksIdResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
    deleteTargetsTargetIdWebhooksId401ApplicationJSONObject?: DeleteTargetsTargetIdWebhooksId401ApplicationJson;
    deleteTargetsTargetIdWebhooksId403ApplicationJSONObject?: DeleteTargetsTargetIdWebhooksId403ApplicationJson;
    deleteTargetsTargetIdWebhooksId404ApplicationJSONObject?: DeleteTargetsTargetIdWebhooksId404ApplicationJson;
}
