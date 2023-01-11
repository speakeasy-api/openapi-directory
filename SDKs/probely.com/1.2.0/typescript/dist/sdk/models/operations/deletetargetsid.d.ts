import { SpeakeasyBase } from "../../../internal/utils";
export declare class DeleteTargetsIdPathParams extends SpeakeasyBase {
    id: string;
}
export declare class DeleteTargetsId401ApplicationJson extends SpeakeasyBase {
    detail?: string;
}
export declare class DeleteTargetsId403ApplicationJson extends SpeakeasyBase {
    detail?: string;
}
export declare class DeleteTargetsId404ApplicationJson extends SpeakeasyBase {
    detail?: string;
}
export declare class DeleteTargetsIdRequest extends SpeakeasyBase {
    pathParams: DeleteTargetsIdPathParams;
}
export declare class DeleteTargetsIdResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
    deleteTargetsId401ApplicationJSONObject?: DeleteTargetsId401ApplicationJson;
    deleteTargetsId403ApplicationJSONObject?: DeleteTargetsId403ApplicationJson;
    deleteTargetsId404ApplicationJSONObject?: DeleteTargetsId404ApplicationJson;
}
