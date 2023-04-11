import { SpeakeasyBase } from "../../../internal/utils";
import { AxiosResponse } from "axios";
export declare class GetOrganizationInsightMonitoredMediaServerRequest extends SpeakeasyBase {
    monitoredMediaServerId: string;
    organizationId: string;
}
export declare class GetOrganizationInsightMonitoredMediaServerResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
    rawResponse?: AxiosResponse;
    /**
     * Successful operation
     */
    getOrganizationInsightMonitoredMediaServer200ApplicationJSONObject?: Record<string, any>;
}
