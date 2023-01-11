import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class GetTargetsTargetIdFindingsIdIntegrationsJiraServerPathParams extends SpeakeasyBase {
    id: string;
    targetId: string;
}
export declare class GetTargetsTargetIdFindingsIdIntegrationsJiraServer401ApplicationJson extends SpeakeasyBase {
    detail?: string;
}
export declare class GetTargetsTargetIdFindingsIdIntegrationsJiraServer403ApplicationJson extends SpeakeasyBase {
    detail?: string;
}
export declare class GetTargetsTargetIdFindingsIdIntegrationsJiraServerRequest extends SpeakeasyBase {
    pathParams: GetTargetsTargetIdFindingsIdIntegrationsJiraServerPathParams;
}
export declare class GetTargetsTargetIdFindingsIdIntegrationsJiraServerResponse extends SpeakeasyBase {
    contentType: string;
    jiraFinding?: shared.JiraFinding;
    statusCode: number;
    getTargetsTargetIdFindingsIdIntegrationsJiraServer401ApplicationJSONObject?: GetTargetsTargetIdFindingsIdIntegrationsJiraServer401ApplicationJson;
    getTargetsTargetIdFindingsIdIntegrationsJiraServer403ApplicationJSONObject?: GetTargetsTargetIdFindingsIdIntegrationsJiraServer403ApplicationJson;
}
