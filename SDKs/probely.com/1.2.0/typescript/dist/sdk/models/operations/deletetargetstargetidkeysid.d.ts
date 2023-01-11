import { SpeakeasyBase } from "../../../internal/utils";
export declare class DeleteTargetsTargetIdKeysIdPathParams extends SpeakeasyBase {
    id: string;
    targetId: string;
}
export declare class DeleteTargetsTargetIdKeysId403ApplicationJson extends SpeakeasyBase {
    detail?: string;
}
export declare class DeleteTargetsTargetIdKeysId404ApplicationJson extends SpeakeasyBase {
    detail?: string;
}
export declare class DeleteTargetsTargetIdKeysIdRequest extends SpeakeasyBase {
    pathParams: DeleteTargetsTargetIdKeysIdPathParams;
}
export declare class DeleteTargetsTargetIdKeysIdResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
    deleteTargetsTargetIdKeysId403ApplicationJSONObject?: DeleteTargetsTargetIdKeysId403ApplicationJson;
    deleteTargetsTargetIdKeysId404ApplicationJSONObject?: DeleteTargetsTargetIdKeysId404ApplicationJson;
}
