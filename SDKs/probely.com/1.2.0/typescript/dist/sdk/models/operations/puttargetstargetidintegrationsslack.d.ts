import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class PutTargetsTargetIdIntegrationsSlackPathParams extends SpeakeasyBase {
    targetId: string;
}
export declare class PutTargetsTargetIdIntegrationsSlack401ApplicationJson extends SpeakeasyBase {
    detail?: string;
}
export declare class PutTargetsTargetIdIntegrationsSlack403ApplicationJson extends SpeakeasyBase {
    detail?: string;
}
export declare class PutTargetsTargetIdIntegrationsSlack404ApplicationJson extends SpeakeasyBase {
    detail?: string;
}
export declare class PutTargetsTargetIdIntegrationsSlackRequest extends SpeakeasyBase {
    pathParams: PutTargetsTargetIdIntegrationsSlackPathParams;
    request: shared.Slack;
}
export declare class PutTargetsTargetIdIntegrationsSlackResponse extends SpeakeasyBase {
    contentType: string;
    slack?: shared.Slack;
    statusCode: number;
    putTargetsTargetIdIntegrationsSlack401ApplicationJSONObject?: PutTargetsTargetIdIntegrationsSlack401ApplicationJson;
    putTargetsTargetIdIntegrationsSlack403ApplicationJSONObject?: PutTargetsTargetIdIntegrationsSlack403ApplicationJson;
    putTargetsTargetIdIntegrationsSlack404ApplicationJSONObject?: PutTargetsTargetIdIntegrationsSlack404ApplicationJson;
}
