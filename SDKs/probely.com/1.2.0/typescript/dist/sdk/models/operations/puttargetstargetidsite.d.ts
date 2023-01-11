import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class PutTargetsTargetIdSitePathParams extends SpeakeasyBase {
    targetId: string;
}
export declare class PutTargetsTargetIdSite400ApplicationJson extends SpeakeasyBase {
    lessThanFieldNameGreaterThan?: string[];
    nonFieldErrors?: string[];
}
export declare class PutTargetsTargetIdSite401ApplicationJson extends SpeakeasyBase {
    detail?: string;
}
export declare class PutTargetsTargetIdSite403ApplicationJson extends SpeakeasyBase {
    detail?: string;
}
export declare class PutTargetsTargetIdSite404ApplicationJson extends SpeakeasyBase {
    detail?: string;
}
export declare class PutTargetsTargetIdSiteRequest extends SpeakeasyBase {
    pathParams: PutTargetsTargetIdSitePathParams;
    request: shared.SiteInput;
}
export declare class PutTargetsTargetIdSiteResponse extends SpeakeasyBase {
    contentType: string;
    site?: shared.Site;
    statusCode: number;
    putTargetsTargetIdSite400ApplicationJSONObject?: PutTargetsTargetIdSite400ApplicationJson;
    putTargetsTargetIdSite401ApplicationJSONObject?: PutTargetsTargetIdSite401ApplicationJson;
    putTargetsTargetIdSite403ApplicationJSONObject?: PutTargetsTargetIdSite403ApplicationJson;
    putTargetsTargetIdSite404ApplicationJSONObject?: PutTargetsTargetIdSite404ApplicationJson;
}
