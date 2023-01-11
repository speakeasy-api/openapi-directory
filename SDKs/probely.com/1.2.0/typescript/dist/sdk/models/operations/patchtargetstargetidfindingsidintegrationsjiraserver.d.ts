import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class PatchTargetsTargetIdFindingsIdIntegrationsJiraServerPathParams extends SpeakeasyBase {
    id: string;
    targetId: string;
}
export declare class PatchTargetsTargetIdFindingsIdIntegrationsJiraServer401ApplicationJson extends SpeakeasyBase {
    detail?: string;
}
export declare class PatchTargetsTargetIdFindingsIdIntegrationsJiraServer403ApplicationJson extends SpeakeasyBase {
    detail?: string;
}
export declare class PatchTargetsTargetIdFindingsIdIntegrationsJiraServer404ApplicationJson extends SpeakeasyBase {
    detail?: string;
}
export declare class PatchTargetsTargetIdFindingsIdIntegrationsJiraServerRequest extends SpeakeasyBase {
    pathParams: PatchTargetsTargetIdFindingsIdIntegrationsJiraServerPathParams;
    request: shared.JiraFinding;
}
export declare class PatchTargetsTargetIdFindingsIdIntegrationsJiraServerResponse extends SpeakeasyBase {
    contentType: string;
    jiraFinding?: shared.JiraFinding;
    statusCode: number;
    patchTargetsTargetIdFindingsIdIntegrationsJiraServer401ApplicationJSONObject?: PatchTargetsTargetIdFindingsIdIntegrationsJiraServer401ApplicationJson;
    patchTargetsTargetIdFindingsIdIntegrationsJiraServer403ApplicationJSONObject?: PatchTargetsTargetIdFindingsIdIntegrationsJiraServer403ApplicationJson;
    patchTargetsTargetIdFindingsIdIntegrationsJiraServer404ApplicationJSONObject?: PatchTargetsTargetIdFindingsIdIntegrationsJiraServer404ApplicationJson;
}
