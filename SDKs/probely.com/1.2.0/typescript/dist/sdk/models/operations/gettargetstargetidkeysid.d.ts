import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class GetTargetsTargetIdKeysIdPathParams extends SpeakeasyBase {
    id: string;
    targetId: string;
}
export declare class GetTargetsTargetIdKeysId403ApplicationJson extends SpeakeasyBase {
    detail?: string;
}
export declare class GetTargetsTargetIdKeysId404ApplicationJson extends SpeakeasyBase {
    detail?: string;
}
export declare class GetTargetsTargetIdKeysIdRequest extends SpeakeasyBase {
    pathParams: GetTargetsTargetIdKeysIdPathParams;
}
export declare class GetTargetsTargetIdKeysIdResponse extends SpeakeasyBase {
    apiKey?: shared.ApiKey;
    contentType: string;
    statusCode: number;
    getTargetsTargetIdKeysId403ApplicationJSONObject?: GetTargetsTargetIdKeysId403ApplicationJson;
    getTargetsTargetIdKeysId404ApplicationJSONObject?: GetTargetsTargetIdKeysId404ApplicationJson;
}
