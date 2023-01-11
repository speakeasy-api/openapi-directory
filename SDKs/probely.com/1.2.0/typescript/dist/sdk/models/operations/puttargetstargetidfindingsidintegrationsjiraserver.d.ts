import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class PutTargetsTargetIdFindingsIdIntegrationsJiraServerPathParams extends SpeakeasyBase {
    id: string;
    targetId: string;
}
export declare class PutTargetsTargetIdFindingsIdIntegrationsJiraServer401ApplicationJson extends SpeakeasyBase {
    detail?: string;
}
export declare class PutTargetsTargetIdFindingsIdIntegrationsJiraServer403ApplicationJson extends SpeakeasyBase {
    detail?: string;
}
export declare class PutTargetsTargetIdFindingsIdIntegrationsJiraServer404ApplicationJson extends SpeakeasyBase {
    detail?: string;
}
export declare class PutTargetsTargetIdFindingsIdIntegrationsJiraServerRequest extends SpeakeasyBase {
    pathParams: PutTargetsTargetIdFindingsIdIntegrationsJiraServerPathParams;
    request: shared.JiraFinding;
}
export declare class PutTargetsTargetIdFindingsIdIntegrationsJiraServerResponse extends SpeakeasyBase {
    contentType: string;
    jiraFinding?: shared.JiraFinding;
    statusCode: number;
    putTargetsTargetIdFindingsIdIntegrationsJiraServer401ApplicationJSONObject?: PutTargetsTargetIdFindingsIdIntegrationsJiraServer401ApplicationJson;
    putTargetsTargetIdFindingsIdIntegrationsJiraServer403ApplicationJSONObject?: PutTargetsTargetIdFindingsIdIntegrationsJiraServer403ApplicationJson;
    putTargetsTargetIdFindingsIdIntegrationsJiraServer404ApplicationJSONObject?: PutTargetsTargetIdFindingsIdIntegrationsJiraServer404ApplicationJson;
}
