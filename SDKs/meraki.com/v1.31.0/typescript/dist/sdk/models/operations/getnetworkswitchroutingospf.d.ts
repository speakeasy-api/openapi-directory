import { SpeakeasyBase } from "../../../internal/utils";
import { AxiosResponse } from "axios";
export declare class GetNetworkSwitchRoutingOspfRequest extends SpeakeasyBase {
    networkId: string;
}
export declare class GetNetworkSwitchRoutingOspfResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
    rawResponse?: AxiosResponse;
    /**
     * Successful operation
     */
    getNetworkSwitchRoutingOspf200ApplicationJSONObject?: Record<string, any>;
}
