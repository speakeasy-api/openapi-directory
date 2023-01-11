import { SpeakeasyBase } from "../../../internal/utils";
export declare class GetNetworkSwitchRoutingMulticastPathParams extends SpeakeasyBase {
    networkId: string;
}
export declare class GetNetworkSwitchRoutingMulticastRequest extends SpeakeasyBase {
    pathParams: GetNetworkSwitchRoutingMulticastPathParams;
}
export declare class GetNetworkSwitchRoutingMulticastResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
    getNetworkSwitchRoutingMulticast200ApplicationJSONObject?: Record<string, any>;
}
