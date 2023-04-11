import { SpeakeasyBase } from "../../../internal/utils";
import { AxiosResponse } from "axios";
export declare class GetNetworkSwitchStpRequest extends SpeakeasyBase {
    networkId: string;
}
export declare class GetNetworkSwitchStpResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
    rawResponse?: AxiosResponse;
    /**
     * Successful operation
     */
    getNetworkSwitchStp200ApplicationJSONObject?: Record<string, any>;
}
