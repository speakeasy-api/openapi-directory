import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class GetTargetsTargetIdIntegrationsSlackPathParams extends SpeakeasyBase {
    targetId: string;
}
export declare class GetTargetsTargetIdIntegrationsSlack401ApplicationJson extends SpeakeasyBase {
    detail?: string;
}
export declare class GetTargetsTargetIdIntegrationsSlack403ApplicationJson extends SpeakeasyBase {
    detail?: string;
}
export declare class GetTargetsTargetIdIntegrationsSlackRequest extends SpeakeasyBase {
    pathParams: GetTargetsTargetIdIntegrationsSlackPathParams;
}
export declare class GetTargetsTargetIdIntegrationsSlackResponse extends SpeakeasyBase {
    contentType: string;
    slack?: shared.Slack;
    statusCode: number;
    getTargetsTargetIdIntegrationsSlack401ApplicationJSONObject?: GetTargetsTargetIdIntegrationsSlack401ApplicationJson;
    getTargetsTargetIdIntegrationsSlack403ApplicationJSONObject?: GetTargetsTargetIdIntegrationsSlack403ApplicationJson;
}
