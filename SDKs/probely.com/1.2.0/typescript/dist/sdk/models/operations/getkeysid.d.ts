import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class GetKeysIdPathParams extends SpeakeasyBase {
    id: string;
}
export declare class GetKeysId401ApplicationJson extends SpeakeasyBase {
    detail?: string;
}
export declare class GetKeysId403ApplicationJson extends SpeakeasyBase {
    detail?: string;
}
export declare class GetKeysIdRequest extends SpeakeasyBase {
    pathParams: GetKeysIdPathParams;
}
export declare class GetKeysIdResponse extends SpeakeasyBase {
    apiKey?: shared.ApiKey;
    contentType: string;
    statusCode: number;
    getKeysId401ApplicationJSONObject?: GetKeysId401ApplicationJson;
    getKeysId403ApplicationJSONObject?: GetKeysId403ApplicationJson;
}
