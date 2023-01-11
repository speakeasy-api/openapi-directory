import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class GetTargetsTargetIdFindingsIdIntegrationsJiraCloudPathParams extends SpeakeasyBase {
    id: string;
    targetId: string;
}
export declare class GetTargetsTargetIdFindingsIdIntegrationsJiraCloud401ApplicationJson extends SpeakeasyBase {
    detail?: string;
}
export declare class GetTargetsTargetIdFindingsIdIntegrationsJiraCloud403ApplicationJson extends SpeakeasyBase {
    detail?: string;
}
export declare class GetTargetsTargetIdFindingsIdIntegrationsJiraCloudRequest extends SpeakeasyBase {
    pathParams: GetTargetsTargetIdFindingsIdIntegrationsJiraCloudPathParams;
}
export declare class GetTargetsTargetIdFindingsIdIntegrationsJiraCloudResponse extends SpeakeasyBase {
    contentType: string;
    jiraFinding?: shared.JiraFinding;
    statusCode: number;
    getTargetsTargetIdFindingsIdIntegrationsJiraCloud401ApplicationJSONObject?: GetTargetsTargetIdFindingsIdIntegrationsJiraCloud401ApplicationJson;
    getTargetsTargetIdFindingsIdIntegrationsJiraCloud403ApplicationJSONObject?: GetTargetsTargetIdFindingsIdIntegrationsJiraCloud403ApplicationJson;
}
