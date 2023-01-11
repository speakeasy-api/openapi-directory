import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class PatchTargetsTargetIdSitePathParams extends SpeakeasyBase {
    targetId: string;
}
export declare class PatchTargetsTargetIdSite400ApplicationJson extends SpeakeasyBase {
    lessThanFieldNameGreaterThan?: string[];
    nonFieldErrors?: string[];
}
export declare class PatchTargetsTargetIdSite401ApplicationJson extends SpeakeasyBase {
    detail?: string;
}
export declare class PatchTargetsTargetIdSite403ApplicationJson extends SpeakeasyBase {
    detail?: string;
}
export declare class PatchTargetsTargetIdSite404ApplicationJson extends SpeakeasyBase {
    detail?: string;
}
export declare class PatchTargetsTargetIdSiteRequest extends SpeakeasyBase {
    pathParams: PatchTargetsTargetIdSitePathParams;
    request: shared.SiteInput;
}
export declare class PatchTargetsTargetIdSiteResponse extends SpeakeasyBase {
    contentType: string;
    site?: shared.Site;
    statusCode: number;
    patchTargetsTargetIdSite400ApplicationJSONObject?: PatchTargetsTargetIdSite400ApplicationJson;
    patchTargetsTargetIdSite401ApplicationJSONObject?: PatchTargetsTargetIdSite401ApplicationJson;
    patchTargetsTargetIdSite403ApplicationJSONObject?: PatchTargetsTargetIdSite403ApplicationJson;
    patchTargetsTargetIdSite404ApplicationJSONObject?: PatchTargetsTargetIdSite404ApplicationJson;
}
