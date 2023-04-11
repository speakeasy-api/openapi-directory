import { SpeakeasyBase } from "../../../internal/utils";
import { AxiosResponse } from "axios";
export declare class GetNetworkMerakiAuthUserRequest extends SpeakeasyBase {
    merakiAuthUserId: string;
    networkId: string;
}
export declare class GetNetworkMerakiAuthUserResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
    rawResponse?: AxiosResponse;
    /**
     * Successful operation
     */
    getNetworkMerakiAuthUser200ApplicationJSONObject?: Record<string, any>;
}
