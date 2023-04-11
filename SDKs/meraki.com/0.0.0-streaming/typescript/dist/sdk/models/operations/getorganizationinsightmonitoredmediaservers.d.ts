import { SpeakeasyBase } from "../../../internal/utils";
import { AxiosResponse } from "axios";
export declare class GetOrganizationInsightMonitoredMediaServersRequest extends SpeakeasyBase {
    organizationId: string;
}
export declare class GetOrganizationInsightMonitoredMediaServersResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
    rawResponse?: AxiosResponse;
    /**
     * Successful operation
     */
    getOrganizationInsightMonitoredMediaServers200ApplicationJSONObjects?: Record<string, any>[];
}
