import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class GetIntegrations401ApplicationJson extends SpeakeasyBase {
    detail?: string;
}
export declare class GetIntegrations403ApplicationJson extends SpeakeasyBase {
    detail?: string;
}
export declare class GetIntegrationsResponse extends SpeakeasyBase {
    contentType: string;
    integrations?: shared.Integrations;
    statusCode: number;
    getIntegrations401ApplicationJSONObject?: GetIntegrations401ApplicationJson;
    getIntegrations403ApplicationJSONObject?: GetIntegrations403ApplicationJson;
}
