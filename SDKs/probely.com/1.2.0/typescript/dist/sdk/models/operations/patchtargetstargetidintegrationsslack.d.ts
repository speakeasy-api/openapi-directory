import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class PatchTargetsTargetIdIntegrationsSlackPathParams extends SpeakeasyBase {
    targetId: string;
}
export declare class PatchTargetsTargetIdIntegrationsSlack401ApplicationJson extends SpeakeasyBase {
    detail?: string;
}
export declare class PatchTargetsTargetIdIntegrationsSlack403ApplicationJson extends SpeakeasyBase {
    detail?: string;
}
export declare class PatchTargetsTargetIdIntegrationsSlack404ApplicationJson extends SpeakeasyBase {
    detail?: string;
}
export declare class PatchTargetsTargetIdIntegrationsSlackRequest extends SpeakeasyBase {
    pathParams: PatchTargetsTargetIdIntegrationsSlackPathParams;
    request: shared.Slack;
}
export declare class PatchTargetsTargetIdIntegrationsSlackResponse extends SpeakeasyBase {
    contentType: string;
    slack?: shared.Slack;
    statusCode: number;
    patchTargetsTargetIdIntegrationsSlack401ApplicationJSONObject?: PatchTargetsTargetIdIntegrationsSlack401ApplicationJson;
    patchTargetsTargetIdIntegrationsSlack403ApplicationJSONObject?: PatchTargetsTargetIdIntegrationsSlack403ApplicationJson;
    patchTargetsTargetIdIntegrationsSlack404ApplicationJSONObject?: PatchTargetsTargetIdIntegrationsSlack404ApplicationJson;
}
