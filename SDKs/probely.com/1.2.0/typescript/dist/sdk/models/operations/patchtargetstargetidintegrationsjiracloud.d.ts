import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class PatchTargetsTargetIdIntegrationsJiraCloudPathParams extends SpeakeasyBase {
    targetId: string;
}
export declare class PatchTargetsTargetIdIntegrationsJiraCloud401ApplicationJson extends SpeakeasyBase {
    detail?: string;
}
export declare class PatchTargetsTargetIdIntegrationsJiraCloud403ApplicationJson extends SpeakeasyBase {
    detail?: string;
}
export declare class PatchTargetsTargetIdIntegrationsJiraCloud404ApplicationJson extends SpeakeasyBase {
    detail?: string;
}
export declare class PatchTargetsTargetIdIntegrationsJiraCloudRequest extends SpeakeasyBase {
    pathParams: PatchTargetsTargetIdIntegrationsJiraCloudPathParams;
    request: shared.JiraScope;
}
export declare class PatchTargetsTargetIdIntegrationsJiraCloudResponse extends SpeakeasyBase {
    contentType: string;
    jiraScope?: shared.JiraScope;
    statusCode: number;
    patchTargetsTargetIdIntegrationsJiraCloud401ApplicationJSONObject?: PatchTargetsTargetIdIntegrationsJiraCloud401ApplicationJson;
    patchTargetsTargetIdIntegrationsJiraCloud403ApplicationJSONObject?: PatchTargetsTargetIdIntegrationsJiraCloud403ApplicationJson;
    patchTargetsTargetIdIntegrationsJiraCloud404ApplicationJSONObject?: PatchTargetsTargetIdIntegrationsJiraCloud404ApplicationJson;
}
