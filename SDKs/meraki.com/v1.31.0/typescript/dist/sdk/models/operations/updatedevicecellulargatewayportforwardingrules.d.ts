import { SpeakeasyBase } from "../../../internal/utils";
import { AxiosResponse } from "axios";
export declare class UpdateDeviceCellularGatewayPortForwardingRulesRequestBodyRules extends SpeakeasyBase {
    /**
     * `any` or `restricted`. Specify the right to make inbound connections on the specified ports or port ranges. If `restricted`, a list of allowed IPs is mandatory.
     */
    access: string;
    /**
     * An array of ranges of WAN IP addresses that are allowed to make inbound connections on the specified ports or port ranges.
     */
    allowedIps?: string[];
    /**
     * The IP address of the server or device that hosts the internal resource that you wish to make available on the WAN
     */
    lanIp: string;
    /**
     * A port or port ranges that will receive the forwarded traffic from the WAN
     */
    localPort: string;
    /**
     * A descriptive name for the rule
     */
    name?: string;
    /**
     * TCP or UDP
     */
    protocol: string;
    /**
     * A port or port ranges that will be forwarded to the host on the LAN
     */
    publicPort: string;
}
export declare class UpdateDeviceCellularGatewayPortForwardingRulesRequestBody extends SpeakeasyBase {
    /**
     * An array of port forwarding params
     */
    rules?: UpdateDeviceCellularGatewayPortForwardingRulesRequestBodyRules[];
}
export declare class UpdateDeviceCellularGatewayPortForwardingRulesRequest extends SpeakeasyBase {
    requestBody?: UpdateDeviceCellularGatewayPortForwardingRulesRequestBody;
    serial: string;
}
export declare class UpdateDeviceCellularGatewayPortForwardingRulesResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
    rawResponse?: AxiosResponse;
    /**
     * Successful operation
     */
    updateDeviceCellularGatewayPortForwardingRules200ApplicationJSONObject?: Record<string, any>;
}
