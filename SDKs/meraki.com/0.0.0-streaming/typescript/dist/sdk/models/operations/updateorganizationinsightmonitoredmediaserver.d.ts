import { SpeakeasyBase } from "../../../internal/utils";
import { AxiosResponse } from "axios";
export declare class UpdateOrganizationInsightMonitoredMediaServerRequestBody extends SpeakeasyBase {
    /**
     * The IP address (IPv4 only) or hostname of the media server to monitor
     */
    address?: string;
    /**
     * The name of the VoIP provider
     */
    name?: string;
}
export declare class UpdateOrganizationInsightMonitoredMediaServerRequest extends SpeakeasyBase {
    requestBody?: UpdateOrganizationInsightMonitoredMediaServerRequestBody;
    monitoredMediaServerId: string;
    organizationId: string;
}
export declare class UpdateOrganizationInsightMonitoredMediaServerResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
    rawResponse?: AxiosResponse;
    /**
     * Successful operation
     */
    updateOrganizationInsightMonitoredMediaServer200ApplicationJSONObject?: Record<string, any>;
}
