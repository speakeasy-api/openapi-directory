import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class GetTargetsTargetIdIntegrationsPathParams extends SpeakeasyBase {
    targetId: string;
}
export declare class GetTargetsTargetIdIntegrations401ApplicationJson extends SpeakeasyBase {
    detail?: string;
}
export declare class GetTargetsTargetIdIntegrations403ApplicationJson extends SpeakeasyBase {
    detail?: string;
}
export declare class GetTargetsTargetIdIntegrationsRequest extends SpeakeasyBase {
    pathParams: GetTargetsTargetIdIntegrationsPathParams;
}
export declare class GetTargetsTargetIdIntegrationsResponse extends SpeakeasyBase {
    contentType: string;
    integrations?: shared.Integrations;
    statusCode: number;
    getTargetsTargetIdIntegrations401ApplicationJSONObject?: GetTargetsTargetIdIntegrations401ApplicationJson;
    getTargetsTargetIdIntegrations403ApplicationJSONObject?: GetTargetsTargetIdIntegrations403ApplicationJson;
}
