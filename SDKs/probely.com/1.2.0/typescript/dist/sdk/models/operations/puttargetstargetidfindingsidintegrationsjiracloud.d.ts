import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class PutTargetsTargetIdFindingsIdIntegrationsJiraCloudPathParams extends SpeakeasyBase {
    id: string;
    targetId: string;
}
export declare class PutTargetsTargetIdFindingsIdIntegrationsJiraCloud401ApplicationJson extends SpeakeasyBase {
    detail?: string;
}
export declare class PutTargetsTargetIdFindingsIdIntegrationsJiraCloud403ApplicationJson extends SpeakeasyBase {
    detail?: string;
}
export declare class PutTargetsTargetIdFindingsIdIntegrationsJiraCloud404ApplicationJson extends SpeakeasyBase {
    detail?: string;
}
export declare class PutTargetsTargetIdFindingsIdIntegrationsJiraCloudRequest extends SpeakeasyBase {
    pathParams: PutTargetsTargetIdFindingsIdIntegrationsJiraCloudPathParams;
    request: shared.JiraFinding;
}
export declare class PutTargetsTargetIdFindingsIdIntegrationsJiraCloudResponse extends SpeakeasyBase {
    contentType: string;
    jiraFinding?: shared.JiraFinding;
    statusCode: number;
    putTargetsTargetIdFindingsIdIntegrationsJiraCloud401ApplicationJSONObject?: PutTargetsTargetIdFindingsIdIntegrationsJiraCloud401ApplicationJson;
    putTargetsTargetIdFindingsIdIntegrationsJiraCloud403ApplicationJSONObject?: PutTargetsTargetIdFindingsIdIntegrationsJiraCloud403ApplicationJson;
    putTargetsTargetIdFindingsIdIntegrationsJiraCloud404ApplicationJSONObject?: PutTargetsTargetIdFindingsIdIntegrationsJiraCloud404ApplicationJson;
}
