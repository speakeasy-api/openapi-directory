import { SpeakeasyBase } from "../../../internal/utils";
import { AxiosResponse } from "axios";
export declare class GetNetworkSyslogServersRequest extends SpeakeasyBase {
    networkId: string;
}
export declare class GetNetworkSyslogServersResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
    rawResponse?: AxiosResponse;
    /**
     * Successful operation
     */
    getNetworkSyslogServers200ApplicationJSONObjects?: Record<string, any>[];
}
