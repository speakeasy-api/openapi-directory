import { SpeakeasyBase } from "../../../internal/utils";
import { AxiosResponse } from "axios";
export declare class GetNetworkSmProfilesRequest extends SpeakeasyBase {
    networkId: string;
}
export declare class GetNetworkSmProfiles200ApplicationJSON extends SpeakeasyBase {
    /**
     * Description of a profile.
     */
    description?: string;
    /**
     * ID of a profile.
     */
    id?: string;
    /**
     * Name of a profile.
     */
    name?: string;
    /**
     * Scope of a profile.
     */
    scope?: string;
    /**
     * Tags of a profile.
     */
    tags?: string[];
}
export declare class GetNetworkSmProfilesResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
    rawResponse?: AxiosResponse;
    /**
     * Successful operation
     */
    getNetworkSmProfiles200ApplicationJSONObjects?: GetNetworkSmProfiles200ApplicationJSON[];
}
