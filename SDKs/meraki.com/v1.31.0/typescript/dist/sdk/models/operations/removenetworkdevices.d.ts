import { SpeakeasyBase } from "../../../internal/utils";
import { AxiosResponse } from "axios";
export declare class RemoveNetworkDevicesRequestBody extends SpeakeasyBase {
    /**
     * The serial of a device
     */
    serial: string;
}
export declare class RemoveNetworkDevicesRequest extends SpeakeasyBase {
    requestBody: RemoveNetworkDevicesRequestBody;
    networkId: string;
}
export declare class RemoveNetworkDevicesResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
    rawResponse?: AxiosResponse;
}
