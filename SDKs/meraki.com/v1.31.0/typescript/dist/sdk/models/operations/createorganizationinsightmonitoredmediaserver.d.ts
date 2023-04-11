import { SpeakeasyBase } from "../../../internal/utils";
import { AxiosResponse } from "axios";
export declare class CreateOrganizationInsightMonitoredMediaServerRequestBody extends SpeakeasyBase {
    /**
     * The IP address (IPv4 only) or hostname of the media server to monitor
     */
    address: string;
    /**
     * Indicates that if the media server doesn't respond to ICMP pings, the nearest hop will be used in its stead.
     */
    bestEffortMonitoringEnabled?: boolean;
    /**
     * The name of the VoIP provider
     */
    name: string;
}
export declare class CreateOrganizationInsightMonitoredMediaServerRequest extends SpeakeasyBase {
    requestBody: CreateOrganizationInsightMonitoredMediaServerRequestBody;
    organizationId: string;
}
export declare class CreateOrganizationInsightMonitoredMediaServerResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
    rawResponse?: AxiosResponse;
    /**
     * Successful operation
     */
    createOrganizationInsightMonitoredMediaServer201ApplicationJSONObject?: Record<string, any>;
}
