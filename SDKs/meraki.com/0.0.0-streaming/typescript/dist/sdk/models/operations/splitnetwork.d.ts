import { SpeakeasyBase } from "../../../internal/utils";
import { AxiosResponse } from "axios";
export declare class SplitNetworkRequest extends SpeakeasyBase {
    networkId: string;
}
export declare class SplitNetworkResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
    rawResponse?: AxiosResponse;
    /**
     * Successful operation
     */
    splitNetwork200ApplicationJSONObject?: Record<string, any>;
}
