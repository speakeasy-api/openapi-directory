import { SpeakeasyBase } from "../../../internal/utils";
import { AxiosResponse } from "axios";
export declare class UpdateDeviceSwitchRoutingStaticRouteRequestBody extends SpeakeasyBase {
    /**
     * Option to advertise static route via OSPF
     */
    advertiseViaOspfEnabled?: boolean;
    /**
     * Name or description for layer 3 static route
     */
    name?: string;
    /**
     * IP address of the next hop device to which the device sends its traffic for the subnet
     */
    nextHopIp?: string;
    /**
     * Option to prefer static route over OSPF routes
     */
    preferOverOspfRoutesEnabled?: boolean;
    /**
     * The subnet which is routed via this static route and should be specified in CIDR notation (ex. 1.2.3.0/24)
     */
    subnet?: string;
}
export declare class UpdateDeviceSwitchRoutingStaticRouteRequest extends SpeakeasyBase {
    requestBody?: UpdateDeviceSwitchRoutingStaticRouteRequestBody;
    serial: string;
    staticRouteId: string;
}
export declare class UpdateDeviceSwitchRoutingStaticRouteResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
    rawResponse?: AxiosResponse;
    /**
     * Successful operation
     */
    updateDeviceSwitchRoutingStaticRoute200ApplicationJSONObject?: Record<string, any>;
}
