import { SpeakeasyBase } from "../../../internal/utils";
import { AxiosResponse } from "axios";
export declare class RemoveNetworkDeviceRequest extends SpeakeasyBase {
    networkId: string;
    serial: string;
}
export declare class RemoveNetworkDeviceResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
    rawResponse?: AxiosResponse;
}
