import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class GetTargetsTargetIdIntegrationsJiraServerPathParams extends SpeakeasyBase {
    targetId: string;
}
export declare class GetTargetsTargetIdIntegrationsJiraServer401ApplicationJson extends SpeakeasyBase {
    detail?: string;
}
export declare class GetTargetsTargetIdIntegrationsJiraServer403ApplicationJson extends SpeakeasyBase {
    detail?: string;
}
export declare class GetTargetsTargetIdIntegrationsJiraServerRequest extends SpeakeasyBase {
    pathParams: GetTargetsTargetIdIntegrationsJiraServerPathParams;
}
export declare class GetTargetsTargetIdIntegrationsJiraServerResponse extends SpeakeasyBase {
    contentType: string;
    jiraScope?: shared.JiraScope;
    statusCode: number;
    getTargetsTargetIdIntegrationsJiraServer401ApplicationJSONObject?: GetTargetsTargetIdIntegrationsJiraServer401ApplicationJson;
    getTargetsTargetIdIntegrationsJiraServer403ApplicationJSONObject?: GetTargetsTargetIdIntegrationsJiraServer403ApplicationJson;
}
