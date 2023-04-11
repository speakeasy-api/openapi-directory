import { SpeakeasyBase } from "../../../internal/utils";
import { AxiosResponse } from "axios";
export declare class UpdateNetworkNetflowRequestBody extends SpeakeasyBase {
    /**
     * The IPv4 address of the NetFlow collector.
     */
    collectorIp?: string;
    /**
     * The port that the NetFlow collector will be listening on.
     */
    collectorPort?: number;
    /**
     * The port that the Encrypted Traffic Analytics collector will be listening on.
     */
    etaDstPort?: number;
    /**
     * Boolean indicating whether Encrypted Traffic Analytics is enabled (true) or disabled (false).
     */
    etaEnabled?: boolean;
    /**
     * Boolean indicating whether NetFlow traffic reporting is enabled (true) or disabled (false).
     */
    reportingEnabled?: boolean;
}
export declare class UpdateNetworkNetflowRequest extends SpeakeasyBase {
    requestBody?: UpdateNetworkNetflowRequestBody;
    networkId: string;
}
export declare class UpdateNetworkNetflowResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
    rawResponse?: AxiosResponse;
    /**
     * Successful operation
     */
    updateNetworkNetflow200ApplicationJSONObject?: Record<string, any>;
}
