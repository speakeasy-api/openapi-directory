import { SpeakeasyBase } from "../../../internal/utils";
import { AxiosResponse } from "axios";
export declare class RefreshNetworkSmDeviceDetailsRequest extends SpeakeasyBase {
    deviceId: string;
    networkId: string;
}
export declare class RefreshNetworkSmDeviceDetailsResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
    rawResponse?: AxiosResponse;
}
