import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class PatchTargetsTargetIdIntegrationsJiraServerPathParams extends SpeakeasyBase {
    targetId: string;
}
export declare class PatchTargetsTargetIdIntegrationsJiraServer401ApplicationJson extends SpeakeasyBase {
    detail?: string;
}
export declare class PatchTargetsTargetIdIntegrationsJiraServer403ApplicationJson extends SpeakeasyBase {
    detail?: string;
}
export declare class PatchTargetsTargetIdIntegrationsJiraServer404ApplicationJson extends SpeakeasyBase {
    detail?: string;
}
export declare class PatchTargetsTargetIdIntegrationsJiraServerRequest extends SpeakeasyBase {
    pathParams: PatchTargetsTargetIdIntegrationsJiraServerPathParams;
    request: shared.JiraScope;
}
export declare class PatchTargetsTargetIdIntegrationsJiraServerResponse extends SpeakeasyBase {
    contentType: string;
    jiraScope?: shared.JiraScope;
    statusCode: number;
    patchTargetsTargetIdIntegrationsJiraServer401ApplicationJSONObject?: PatchTargetsTargetIdIntegrationsJiraServer401ApplicationJson;
    patchTargetsTargetIdIntegrationsJiraServer403ApplicationJSONObject?: PatchTargetsTargetIdIntegrationsJiraServer403ApplicationJson;
    patchTargetsTargetIdIntegrationsJiraServer404ApplicationJSONObject?: PatchTargetsTargetIdIntegrationsJiraServer404ApplicationJson;
}
