import { SpeakeasyBase } from "../../../internal/utils";
import { AxiosResponse } from "axios";
export declare class GetNetworkSnmpSettingsRequest extends SpeakeasyBase {
    networkId: string;
}
export declare class GetNetworkSnmpSettingsResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
    rawResponse?: AxiosResponse;
    /**
     * Successful operation
     */
    getNetworkSnmpSettings200ApplicationJSONObject?: Record<string, any>;
}
