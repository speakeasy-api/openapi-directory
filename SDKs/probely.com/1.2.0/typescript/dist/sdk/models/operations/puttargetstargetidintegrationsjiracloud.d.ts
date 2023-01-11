import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class PutTargetsTargetIdIntegrationsJiraCloudPathParams extends SpeakeasyBase {
    targetId: string;
}
export declare class PutTargetsTargetIdIntegrationsJiraCloud401ApplicationJson extends SpeakeasyBase {
    detail?: string;
}
export declare class PutTargetsTargetIdIntegrationsJiraCloud403ApplicationJson extends SpeakeasyBase {
    detail?: string;
}
export declare class PutTargetsTargetIdIntegrationsJiraCloud404ApplicationJson extends SpeakeasyBase {
    detail?: string;
}
export declare class PutTargetsTargetIdIntegrationsJiraCloudRequest extends SpeakeasyBase {
    pathParams: PutTargetsTargetIdIntegrationsJiraCloudPathParams;
    request: shared.JiraScope;
}
export declare class PutTargetsTargetIdIntegrationsJiraCloudResponse extends SpeakeasyBase {
    contentType: string;
    jiraScope?: shared.JiraScope;
    statusCode: number;
    putTargetsTargetIdIntegrationsJiraCloud401ApplicationJSONObject?: PutTargetsTargetIdIntegrationsJiraCloud401ApplicationJson;
    putTargetsTargetIdIntegrationsJiraCloud403ApplicationJSONObject?: PutTargetsTargetIdIntegrationsJiraCloud403ApplicationJson;
    putTargetsTargetIdIntegrationsJiraCloud404ApplicationJSONObject?: PutTargetsTargetIdIntegrationsJiraCloud404ApplicationJson;
}
