import { SpeakeasyBase } from "../../../internal/utils";
export declare class GetNetworkCellularGatewayUplinkPathParams extends SpeakeasyBase {
    networkId: string;
}
export declare class GetNetworkCellularGatewayUplinkRequest extends SpeakeasyBase {
    pathParams: GetNetworkCellularGatewayUplinkPathParams;
}
export declare class GetNetworkCellularGatewayUplinkResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
    getNetworkCellularGatewayUplink200ApplicationJSONObject?: Record<string, any>;
}
