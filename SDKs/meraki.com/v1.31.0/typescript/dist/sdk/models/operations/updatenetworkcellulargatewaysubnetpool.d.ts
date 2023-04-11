import { SpeakeasyBase } from "../../../internal/utils";
import { AxiosResponse } from "axios";
export declare class UpdateNetworkCellularGatewaySubnetPoolRequestBody extends SpeakeasyBase {
    /**
     * CIDR of the pool of subnets. Each MG in this network will automatically pick a subnet from this pool.
     */
    cidr?: string;
    /**
     * Mask used for the subnet of all MGs in  this network.
     */
    mask?: number;
}
export declare class UpdateNetworkCellularGatewaySubnetPoolRequest extends SpeakeasyBase {
    requestBody?: UpdateNetworkCellularGatewaySubnetPoolRequestBody;
    networkId: string;
}
export declare class UpdateNetworkCellularGatewaySubnetPoolResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
    rawResponse?: AxiosResponse;
    /**
     * Successful operation
     */
    updateNetworkCellularGatewaySubnetPool200ApplicationJSONObject?: Record<string, any>;
}
