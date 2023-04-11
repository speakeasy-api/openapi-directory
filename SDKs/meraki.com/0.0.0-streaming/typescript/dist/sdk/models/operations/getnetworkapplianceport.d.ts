import { SpeakeasyBase } from "../../../internal/utils";
import { AxiosResponse } from "axios";
export declare class GetNetworkAppliancePortRequest extends SpeakeasyBase {
    appliancePortId: string;
    networkId: string;
}
export declare class GetNetworkAppliancePortResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
    rawResponse?: AxiosResponse;
    /**
     * Successful operation
     */
    getNetworkAppliancePort200ApplicationJSONObject?: Record<string, any>;
}
