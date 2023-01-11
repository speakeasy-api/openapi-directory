import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class PutTargetsTargetIdIntegrationsJiraServerPathParams extends SpeakeasyBase {
    targetId: string;
}
export declare class PutTargetsTargetIdIntegrationsJiraServer401ApplicationJson extends SpeakeasyBase {
    detail?: string;
}
export declare class PutTargetsTargetIdIntegrationsJiraServer403ApplicationJson extends SpeakeasyBase {
    detail?: string;
}
export declare class PutTargetsTargetIdIntegrationsJiraServer404ApplicationJson extends SpeakeasyBase {
    detail?: string;
}
export declare class PutTargetsTargetIdIntegrationsJiraServerRequest extends SpeakeasyBase {
    pathParams: PutTargetsTargetIdIntegrationsJiraServerPathParams;
    request: shared.JiraScope;
}
export declare class PutTargetsTargetIdIntegrationsJiraServerResponse extends SpeakeasyBase {
    contentType: string;
    jiraScope?: shared.JiraScope;
    statusCode: number;
    putTargetsTargetIdIntegrationsJiraServer401ApplicationJSONObject?: PutTargetsTargetIdIntegrationsJiraServer401ApplicationJson;
    putTargetsTargetIdIntegrationsJiraServer403ApplicationJSONObject?: PutTargetsTargetIdIntegrationsJiraServer403ApplicationJson;
    putTargetsTargetIdIntegrationsJiraServer404ApplicationJSONObject?: PutTargetsTargetIdIntegrationsJiraServer404ApplicationJson;
}
