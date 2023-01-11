import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class PatchTargetsTargetIdFindingsIdIntegrationsJiraCloudPathParams extends SpeakeasyBase {
    id: string;
    targetId: string;
}
export declare class PatchTargetsTargetIdFindingsIdIntegrationsJiraCloud401ApplicationJson extends SpeakeasyBase {
    detail?: string;
}
export declare class PatchTargetsTargetIdFindingsIdIntegrationsJiraCloud403ApplicationJson extends SpeakeasyBase {
    detail?: string;
}
export declare class PatchTargetsTargetIdFindingsIdIntegrationsJiraCloud404ApplicationJson extends SpeakeasyBase {
    detail?: string;
}
export declare class PatchTargetsTargetIdFindingsIdIntegrationsJiraCloudRequest extends SpeakeasyBase {
    pathParams: PatchTargetsTargetIdFindingsIdIntegrationsJiraCloudPathParams;
    request: shared.JiraFinding;
}
export declare class PatchTargetsTargetIdFindingsIdIntegrationsJiraCloudResponse extends SpeakeasyBase {
    contentType: string;
    jiraFinding?: shared.JiraFinding;
    statusCode: number;
    patchTargetsTargetIdFindingsIdIntegrationsJiraCloud401ApplicationJSONObject?: PatchTargetsTargetIdFindingsIdIntegrationsJiraCloud401ApplicationJson;
    patchTargetsTargetIdFindingsIdIntegrationsJiraCloud403ApplicationJSONObject?: PatchTargetsTargetIdFindingsIdIntegrationsJiraCloud403ApplicationJson;
    patchTargetsTargetIdFindingsIdIntegrationsJiraCloud404ApplicationJSONObject?: PatchTargetsTargetIdFindingsIdIntegrationsJiraCloud404ApplicationJson;
}
