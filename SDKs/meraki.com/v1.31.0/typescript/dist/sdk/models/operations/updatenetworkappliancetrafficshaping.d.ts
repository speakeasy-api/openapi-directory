import { SpeakeasyBase } from "../../../internal/utils";
import { AxiosResponse } from "axios";
/**
 * Global per-client bandwidth limit
 */
export declare class UpdateNetworkApplianceTrafficShapingRequestBodyGlobalBandwidthLimits extends SpeakeasyBase {
    /**
     * The download bandwidth limit in Kbps. (0 represents no limit.)
     */
    limitDown?: number;
    /**
     * The upload bandwidth limit in Kbps. (0 represents no limit.)
     */
    limitUp?: number;
}
export declare class UpdateNetworkApplianceTrafficShapingRequestBody extends SpeakeasyBase {
    /**
     * Global per-client bandwidth limit
     */
    globalBandwidthLimits?: UpdateNetworkApplianceTrafficShapingRequestBodyGlobalBandwidthLimits;
}
export declare class UpdateNetworkApplianceTrafficShapingRequest extends SpeakeasyBase {
    requestBody?: UpdateNetworkApplianceTrafficShapingRequestBody;
    networkId: string;
}
export declare class UpdateNetworkApplianceTrafficShapingResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
    rawResponse?: AxiosResponse;
    /**
     * Successful operation
     */
    updateNetworkApplianceTrafficShaping200ApplicationJSONObject?: Record<string, any>;
}
