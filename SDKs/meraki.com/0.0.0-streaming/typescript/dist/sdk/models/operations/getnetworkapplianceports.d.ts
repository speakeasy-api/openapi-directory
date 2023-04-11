import { SpeakeasyBase } from "../../../internal/utils";
import { AxiosResponse } from "axios";
export declare class GetNetworkAppliancePortsRequest extends SpeakeasyBase {
    networkId: string;
}
export declare class GetNetworkAppliancePortsResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
    rawResponse?: AxiosResponse;
    /**
     * Successful operation
     */
    getNetworkAppliancePorts200ApplicationJSONObjects?: Record<string, any>[];
}
