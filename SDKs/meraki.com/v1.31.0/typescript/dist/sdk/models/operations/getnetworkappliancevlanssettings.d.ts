import { SpeakeasyBase } from "../../../internal/utils";
import { AxiosResponse } from "axios";
export declare class GetNetworkApplianceVlansSettingsRequest extends SpeakeasyBase {
    networkId: string;
}
export declare class GetNetworkApplianceVlansSettingsResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
    rawResponse?: AxiosResponse;
    /**
     * Successful operation
     */
    getNetworkApplianceVlansSettings200ApplicationJSONObject?: Record<string, any>;
}
