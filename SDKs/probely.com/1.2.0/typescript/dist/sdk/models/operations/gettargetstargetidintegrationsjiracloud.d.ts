import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class GetTargetsTargetIdIntegrationsJiraCloudPathParams extends SpeakeasyBase {
    targetId: string;
}
export declare class GetTargetsTargetIdIntegrationsJiraCloud401ApplicationJson extends SpeakeasyBase {
    detail?: string;
}
export declare class GetTargetsTargetIdIntegrationsJiraCloud403ApplicationJson extends SpeakeasyBase {
    detail?: string;
}
export declare class GetTargetsTargetIdIntegrationsJiraCloudRequest extends SpeakeasyBase {
    pathParams: GetTargetsTargetIdIntegrationsJiraCloudPathParams;
}
export declare class GetTargetsTargetIdIntegrationsJiraCloudResponse extends SpeakeasyBase {
    contentType: string;
    jiraScope?: shared.JiraScope;
    statusCode: number;
    getTargetsTargetIdIntegrationsJiraCloud401ApplicationJSONObject?: GetTargetsTargetIdIntegrationsJiraCloud401ApplicationJson;
    getTargetsTargetIdIntegrationsJiraCloud403ApplicationJSONObject?: GetTargetsTargetIdIntegrationsJiraCloud403ApplicationJson;
}
