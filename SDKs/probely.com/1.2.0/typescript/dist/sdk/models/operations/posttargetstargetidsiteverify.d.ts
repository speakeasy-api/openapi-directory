import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class PostTargetsTargetIdSiteVerifyPathParams extends SpeakeasyBase {
    targetId: string;
}
export declare class PostTargetsTargetIdSiteVerifyRequestBody extends SpeakeasyBase {
    type: shared.VerificationTypeEnum;
}
export declare class PostTargetsTargetIdSiteVerify200ApplicationJson extends SpeakeasyBase {
    message?: string;
}
export declare class PostTargetsTargetIdSiteVerify400ApplicationJson extends SpeakeasyBase {
    error?: string;
}
export declare class PostTargetsTargetIdSiteVerify401ApplicationJson extends SpeakeasyBase {
    detail?: string;
}
export declare class PostTargetsTargetIdSiteVerify403ApplicationJson extends SpeakeasyBase {
    detail?: string;
}
export declare class PostTargetsTargetIdSiteVerify404ApplicationJson extends SpeakeasyBase {
    detail?: string;
}
export declare class PostTargetsTargetIdSiteVerifyRequest extends SpeakeasyBase {
    pathParams: PostTargetsTargetIdSiteVerifyPathParams;
    request: PostTargetsTargetIdSiteVerifyRequestBody;
}
export declare class PostTargetsTargetIdSiteVerifyResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
    postTargetsTargetIdSiteVerify200ApplicationJSONObject?: PostTargetsTargetIdSiteVerify200ApplicationJson;
    postTargetsTargetIdSiteVerify400ApplicationJSONObject?: PostTargetsTargetIdSiteVerify400ApplicationJson;
    postTargetsTargetIdSiteVerify401ApplicationJSONObject?: PostTargetsTargetIdSiteVerify401ApplicationJson;
    postTargetsTargetIdSiteVerify403ApplicationJSONObject?: PostTargetsTargetIdSiteVerify403ApplicationJson;
    postTargetsTargetIdSiteVerify404ApplicationJSONObject?: PostTargetsTargetIdSiteVerify404ApplicationJson;
}
