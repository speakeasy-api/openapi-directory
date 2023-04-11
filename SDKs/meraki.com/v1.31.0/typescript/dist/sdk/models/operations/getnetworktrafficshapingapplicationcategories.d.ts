import { SpeakeasyBase } from "../../../internal/utils";
import { AxiosResponse } from "axios";
export declare class GetNetworkTrafficShapingApplicationCategoriesRequest extends SpeakeasyBase {
    networkId: string;
}
export declare class GetNetworkTrafficShapingApplicationCategoriesResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
    rawResponse?: AxiosResponse;
    /**
     * Successful operation
     */
    getNetworkTrafficShapingApplicationCategories200ApplicationJSONObject?: Record<string, any>;
}
