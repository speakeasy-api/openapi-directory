import { SpeakeasyBase } from "../../../internal/utils";
import { AxiosResponse } from "axios";
export declare class GetDeviceSwitchRoutingInterfaceDhcpRequest extends SpeakeasyBase {
    interfaceId: string;
    serial: string;
}
export declare class GetDeviceSwitchRoutingInterfaceDhcpResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
    rawResponse?: AxiosResponse;
    /**
     * Successful operation
     */
    getDeviceSwitchRoutingInterfaceDhcp200ApplicationJSONObject?: Record<string, any>;
}
