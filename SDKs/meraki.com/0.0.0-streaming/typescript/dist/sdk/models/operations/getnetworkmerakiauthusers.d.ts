import { SpeakeasyBase } from "../../../internal/utils";
import { AxiosResponse } from "axios";
export declare class GetNetworkMerakiAuthUsersRequest extends SpeakeasyBase {
    networkId: string;
}
export declare class GetNetworkMerakiAuthUsersResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
    rawResponse?: AxiosResponse;
    /**
     * Successful operation
     */
    getNetworkMerakiAuthUsers200ApplicationJSONObjects?: Record<string, any>[];
}
