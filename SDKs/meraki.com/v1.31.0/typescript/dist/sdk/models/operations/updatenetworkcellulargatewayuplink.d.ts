import { SpeakeasyBase } from "../../../internal/utils";
import { AxiosResponse } from "axios";
/**
 * The bandwidth settings for the 'cellular' uplink
 */
export declare class UpdateNetworkCellularGatewayUplinkRequestBodyBandwidthLimits extends SpeakeasyBase {
    /**
     * The maximum download limit (integer, in Kbps). null indicates no limit
     */
    limitDown?: number;
    /**
     * The maximum upload limit (integer, in Kbps). null indicates no limit
     */
    limitUp?: number;
}
export declare class UpdateNetworkCellularGatewayUplinkRequestBody extends SpeakeasyBase {
    /**
     * The bandwidth settings for the 'cellular' uplink
     */
    bandwidthLimits?: UpdateNetworkCellularGatewayUplinkRequestBodyBandwidthLimits;
}
export declare class UpdateNetworkCellularGatewayUplinkRequest extends SpeakeasyBase {
    requestBody?: UpdateNetworkCellularGatewayUplinkRequestBody;
    networkId: string;
}
export declare class UpdateNetworkCellularGatewayUplinkResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
    rawResponse?: AxiosResponse;
    /**
     * Successful operation
     */
    updateNetworkCellularGatewayUplink200ApplicationJSONObject?: Record<string, any>;
}
