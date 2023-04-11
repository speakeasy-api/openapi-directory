import { SpeakeasyBase } from "../../../internal/utils";
import { AxiosResponse } from "axios";
export declare class GetNetworkSnmpRequest extends SpeakeasyBase {
    networkId: string;
}
export declare class GetNetworkSnmpResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
    rawResponse?: AxiosResponse;
    /**
     * Successful operation
     */
    getNetworkSnmp200ApplicationJSONObject?: Record<string, any>;
}
