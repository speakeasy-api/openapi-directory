import { SpeakeasyBase } from "../../../internal/utils";
import { AxiosResponse } from "axios";
export declare class GetNetworkCellularGatewayUplinkRequest extends SpeakeasyBase {
    networkId: string;
}
export declare class GetNetworkCellularGatewayUplinkResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
    rawResponse?: AxiosResponse;
    /**
     * Successful operation
     */
    getNetworkCellularGatewayUplink200ApplicationJSONObject?: Record<string, any>;
}
