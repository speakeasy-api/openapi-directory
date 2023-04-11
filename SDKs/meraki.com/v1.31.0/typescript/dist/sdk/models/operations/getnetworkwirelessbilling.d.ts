import { SpeakeasyBase } from "../../../internal/utils";
import { AxiosResponse } from "axios";
export declare class GetNetworkWirelessBillingRequest extends SpeakeasyBase {
    networkId: string;
}
export declare class GetNetworkWirelessBillingResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
    rawResponse?: AxiosResponse;
    /**
     * Successful operation
     */
    getNetworkWirelessBilling200ApplicationJSONObject?: Record<string, any>;
}
