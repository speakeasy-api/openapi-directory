import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class GetTargetsTargetIdSitePathParams extends SpeakeasyBase {
    targetId: string;
}
export declare class GetTargetsTargetIdSite401ApplicationJson extends SpeakeasyBase {
    detail?: string;
}
export declare class GetTargetsTargetIdSite404ApplicationJson extends SpeakeasyBase {
    detail?: string;
}
export declare class GetTargetsTargetIdSiteRequest extends SpeakeasyBase {
    pathParams: GetTargetsTargetIdSitePathParams;
}
export declare class GetTargetsTargetIdSiteResponse extends SpeakeasyBase {
    contentType: string;
    site?: shared.Site;
    statusCode: number;
    getTargetsTargetIdSite401ApplicationJSONObject?: GetTargetsTargetIdSite401ApplicationJson;
    getTargetsTargetIdSite404ApplicationJSONObject?: GetTargetsTargetIdSite404ApplicationJson;
}
