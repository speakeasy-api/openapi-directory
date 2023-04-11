import { SpeakeasyBase } from "../../../internal/utils";
import { AxiosResponse } from "axios";
export declare class GetNetworkCellularGatewaySubnetPoolRequest extends SpeakeasyBase {
    networkId: string;
}
export declare class GetNetworkCellularGatewaySubnetPoolResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
    rawResponse?: AxiosResponse;
    /**
     * Successful operation
     */
    getNetworkCellularGatewaySubnetPool200ApplicationJSONObject?: Record<string, any>;
}
