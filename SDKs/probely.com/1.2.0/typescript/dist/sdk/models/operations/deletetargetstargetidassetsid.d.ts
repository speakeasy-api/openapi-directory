import { SpeakeasyBase } from "../../../internal/utils";
export declare class DeleteTargetsTargetIdAssetsIdPathParams extends SpeakeasyBase {
    id: string;
    targetId: string;
}
export declare class DeleteTargetsTargetIdAssetsId401ApplicationJson extends SpeakeasyBase {
    detail?: string;
}
export declare class DeleteTargetsTargetIdAssetsId403ApplicationJson extends SpeakeasyBase {
    detail?: string;
}
export declare class DeleteTargetsTargetIdAssetsId404ApplicationJson extends SpeakeasyBase {
    detail?: string;
}
export declare class DeleteTargetsTargetIdAssetsIdRequest extends SpeakeasyBase {
    pathParams: DeleteTargetsTargetIdAssetsIdPathParams;
}
export declare class DeleteTargetsTargetIdAssetsIdResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
    deleteTargetsTargetIdAssetsId401ApplicationJSONObject?: DeleteTargetsTargetIdAssetsId401ApplicationJson;
    deleteTargetsTargetIdAssetsId403ApplicationJSONObject?: DeleteTargetsTargetIdAssetsId403ApplicationJson;
    deleteTargetsTargetIdAssetsId404ApplicationJSONObject?: DeleteTargetsTargetIdAssetsId404ApplicationJson;
}
