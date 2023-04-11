import { SpeakeasyBase } from "../../../internal/utils";
import { AxiosResponse } from "axios";
export declare class GetNetworkVlanRequest extends SpeakeasyBase {
    networkId: string;
    vlanId: string;
}
export declare class GetNetworkVlanResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
    rawResponse?: AxiosResponse;
    /**
     * Successful operation
     */
    getNetworkVlan200ApplicationJSONObject?: Record<string, any>;
}
