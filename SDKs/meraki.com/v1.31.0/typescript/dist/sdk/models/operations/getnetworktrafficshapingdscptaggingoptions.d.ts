import { SpeakeasyBase } from "../../../internal/utils";
import { AxiosResponse } from "axios";
export declare class GetNetworkTrafficShapingDscpTaggingOptionsRequest extends SpeakeasyBase {
    networkId: string;
}
export declare class GetNetworkTrafficShapingDscpTaggingOptionsResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
    rawResponse?: AxiosResponse;
    /**
     * Successful operation
     */
    getNetworkTrafficShapingDscpTaggingOptions200ApplicationJSONObjects?: Record<string, any>[];
}
