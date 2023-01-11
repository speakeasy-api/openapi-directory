import { SpeakeasyBase } from "../../../internal/utils";
export declare class DeleteKeysIdPathParams extends SpeakeasyBase {
    id: string;
}
export declare class DeleteKeysId401ApplicationJson extends SpeakeasyBase {
    detail?: string;
}
export declare class DeleteKeysId403ApplicationJson extends SpeakeasyBase {
    detail?: string;
}
export declare class DeleteKeysIdRequest extends SpeakeasyBase {
    pathParams: DeleteKeysIdPathParams;
}
export declare class DeleteKeysIdResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
    deleteKeysId401ApplicationJSONObject?: DeleteKeysId401ApplicationJson;
    deleteKeysId403ApplicationJSONObject?: DeleteKeysId403ApplicationJson;
}
