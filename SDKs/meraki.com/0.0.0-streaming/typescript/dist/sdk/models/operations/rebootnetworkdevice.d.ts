import { SpeakeasyBase } from "../../../internal/utils";
import { AxiosResponse } from "axios";
export declare class RebootNetworkDeviceRequest extends SpeakeasyBase {
    networkId: string;
    serial: string;
}
export declare class RebootNetworkDeviceResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
    rawResponse?: AxiosResponse;
    /**
     * Successful operation
     */
    rebootNetworkDevice200ApplicationJSONObject?: Record<string, any>;
}
