import { SpeakeasyBase } from "../../../internal/utils";
import { AxiosResponse } from "axios";
export declare class GetNetworkSmUserDeviceProfilesRequest extends SpeakeasyBase {
    networkId: string;
    userId: string;
}
export declare class GetNetworkSmUserDeviceProfilesResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
    rawResponse?: AxiosResponse;
    /**
     * Successful operation
     */
    getNetworkSmUserDeviceProfiles200ApplicationJSONObjects?: Record<string, any>[];
}
