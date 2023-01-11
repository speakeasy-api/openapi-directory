import { SpeakeasyBase } from "../../../internal/utils";
export declare class DeleteTargetsTargetIdScheduledscansIdPathParams extends SpeakeasyBase {
    id: string;
    targetId: string;
}
export declare class DeleteTargetsTargetIdScheduledscansId401ApplicationJson extends SpeakeasyBase {
    detail?: string;
}
export declare class DeleteTargetsTargetIdScheduledscansId403ApplicationJson extends SpeakeasyBase {
    detail?: string;
}
export declare class DeleteTargetsTargetIdScheduledscansIdRequest extends SpeakeasyBase {
    pathParams: DeleteTargetsTargetIdScheduledscansIdPathParams;
}
export declare class DeleteTargetsTargetIdScheduledscansIdResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
    deleteTargetsTargetIdScheduledscansId401ApplicationJSONObject?: DeleteTargetsTargetIdScheduledscansId401ApplicationJson;
    deleteTargetsTargetIdScheduledscansId403ApplicationJSONObject?: DeleteTargetsTargetIdScheduledscansId403ApplicationJson;
}
