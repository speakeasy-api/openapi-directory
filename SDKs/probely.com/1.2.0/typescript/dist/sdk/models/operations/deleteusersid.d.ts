import { SpeakeasyBase } from "../../../internal/utils";
export declare class DeleteUsersIdPathParams extends SpeakeasyBase {
    id: string;
}
export declare class DeleteUsersId401ApplicationJson extends SpeakeasyBase {
    detail?: string;
}
export declare class DeleteUsersId403ApplicationJson extends SpeakeasyBase {
    detail?: string;
}
export declare class DeleteUsersId404ApplicationJson extends SpeakeasyBase {
    detail?: string;
}
export declare class DeleteUsersIdRequest extends SpeakeasyBase {
    pathParams: DeleteUsersIdPathParams;
}
export declare class DeleteUsersIdResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
    deleteUsersId401ApplicationJSONObject?: DeleteUsersId401ApplicationJson;
    deleteUsersId403ApplicationJSONObject?: DeleteUsersId403ApplicationJson;
    deleteUsersId404ApplicationJSONObject?: DeleteUsersId404ApplicationJson;
}
