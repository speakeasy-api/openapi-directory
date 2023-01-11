import { SpeakeasyBase } from "../../../internal/utils";
export declare class GetApiV2PredictionsIdPathParams extends SpeakeasyBase {
    id: number;
}
export declare class GetApiV2PredictionsId200ApplicationJson extends SpeakeasyBase {
    data?: Record<string, any>[];
}
export declare class GetApiV2PredictionsId404ApplicationJson extends SpeakeasyBase {
    errors?: Record<string, any>;
}
export declare class GetApiV2PredictionsIdRequest extends SpeakeasyBase {
    pathParams: GetApiV2PredictionsIdPathParams;
}
export declare class GetApiV2PredictionsIdResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
    getApiV2PredictionsId200ApplicationJSONObject?: GetApiV2PredictionsId200ApplicationJson;
    getApiV2PredictionsId404ApplicationJSONObject?: GetApiV2PredictionsId404ApplicationJson;
}
