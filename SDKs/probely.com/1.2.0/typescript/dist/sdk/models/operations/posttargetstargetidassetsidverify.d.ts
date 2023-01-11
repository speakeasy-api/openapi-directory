import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class PostTargetsTargetIdAssetsIdVerifyPathParams extends SpeakeasyBase {
    id: string;
    targetId: string;
}
export declare class PostTargetsTargetIdAssetsIdVerifyRequestBody extends SpeakeasyBase {
    type: shared.VerificationTypeEnum;
}
export declare class PostTargetsTargetIdAssetsIdVerify200ApplicationJson extends SpeakeasyBase {
    message?: string;
}
export declare class PostTargetsTargetIdAssetsIdVerify400ApplicationJson extends SpeakeasyBase {
    error?: string;
}
export declare class PostTargetsTargetIdAssetsIdVerify401ApplicationJson extends SpeakeasyBase {
    detail?: string;
}
export declare class PostTargetsTargetIdAssetsIdVerify403ApplicationJson extends SpeakeasyBase {
    detail?: string;
}
export declare class PostTargetsTargetIdAssetsIdVerify404ApplicationJson extends SpeakeasyBase {
    detail?: string;
}
export declare class PostTargetsTargetIdAssetsIdVerifyRequest extends SpeakeasyBase {
    pathParams: PostTargetsTargetIdAssetsIdVerifyPathParams;
    request: PostTargetsTargetIdAssetsIdVerifyRequestBody;
}
export declare class PostTargetsTargetIdAssetsIdVerifyResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
    postTargetsTargetIdAssetsIdVerify200ApplicationJSONObject?: PostTargetsTargetIdAssetsIdVerify200ApplicationJson;
    postTargetsTargetIdAssetsIdVerify400ApplicationJSONObject?: PostTargetsTargetIdAssetsIdVerify400ApplicationJson;
    postTargetsTargetIdAssetsIdVerify401ApplicationJSONObject?: PostTargetsTargetIdAssetsIdVerify401ApplicationJson;
    postTargetsTargetIdAssetsIdVerify403ApplicationJSONObject?: PostTargetsTargetIdAssetsIdVerify403ApplicationJson;
    postTargetsTargetIdAssetsIdVerify404ApplicationJSONObject?: PostTargetsTargetIdAssetsIdVerify404ApplicationJson;
}
