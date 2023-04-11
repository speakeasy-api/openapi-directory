import { SpeakeasyBase } from "../../../internal/utils";
import { AxiosResponse } from "axios";
export declare class GetNetworkTopologyLinkLayerRequest extends SpeakeasyBase {
    networkId: string;
}
export declare class GetNetworkTopologyLinkLayerResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
    rawResponse?: AxiosResponse;
    /**
     * Successful operation
     */
    getNetworkTopologyLinkLayer200ApplicationJSONObject?: Record<string, any>;
}
