import { SpeakeasyBase } from "../../../internal/utils";
import { AxiosResponse } from "axios";
export declare class GetDeviceApplianceDhcpSubnetsRequest extends SpeakeasyBase {
    serial: string;
}
export declare class GetDeviceApplianceDhcpSubnetsResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
    rawResponse?: AxiosResponse;
    /**
     * Successful operation
     */
    getDeviceApplianceDhcpSubnets200ApplicationJSONObjects?: Record<string, any>[];
}
