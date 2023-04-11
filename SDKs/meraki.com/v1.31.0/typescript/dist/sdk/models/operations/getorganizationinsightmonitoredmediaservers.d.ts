import { SpeakeasyBase } from "../../../internal/utils";
import { AxiosResponse } from "axios";
export declare class GetOrganizationInsightMonitoredMediaServersRequest extends SpeakeasyBase {
    organizationId: string;
}
export declare class GetOrganizationInsightMonitoredMediaServers200ApplicationJSON extends SpeakeasyBase {
    /**
     * The IP address (IPv4 only) or hostname of the media server to monitor
     */
    address?: string;
    /**
     * Indicates that if the media server doesn't respond to ICMP pings, the nearest hop will be used in its stead
     */
    bestEffortMonitoringEnabled?: boolean;
    /**
     * Monitored media server id
     */
    id?: string;
    /**
     * The name of the VoIP provider
     */
    name?: string;
}
export declare class GetOrganizationInsightMonitoredMediaServersResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
    rawResponse?: AxiosResponse;
    /**
     * Successful operation
     */
    getOrganizationInsightMonitoredMediaServers200ApplicationJSONObjects?: GetOrganizationInsightMonitoredMediaServers200ApplicationJSON[];
}
