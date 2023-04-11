import { SpeakeasyBase } from "../../../internal/utils";
import { AxiosResponse } from "axios";
export declare class GetNetworkSmProfilesRequest extends SpeakeasyBase {
    networkId: string;
}
export declare class GetNetworkSmProfilesResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
    rawResponse?: AxiosResponse;
    /**
     * Successful operation
     */
    getNetworkSmProfiles200ApplicationJSONObject?: Record<string, any>;
}
