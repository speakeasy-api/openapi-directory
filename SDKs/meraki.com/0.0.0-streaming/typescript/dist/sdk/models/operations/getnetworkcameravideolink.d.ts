import { SpeakeasyBase } from "../../../internal/utils";
import { AxiosResponse } from "axios";
export declare class GetNetworkCameraVideoLinkRequest extends SpeakeasyBase {
    networkId: string;
    serial: string;
    /**
     * [optional] The video link will start at this timestamp. The timestamp is in UNIX Epoch time (milliseconds). If no timestamp is specified, we will assume current time.
     */
    timestamp?: string;
}
export declare class GetNetworkCameraVideoLinkResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
    rawResponse?: AxiosResponse;
    /**
     * Successful operation
     */
    getNetworkCameraVideoLink200ApplicationJSONObject?: Record<string, any>;
}
