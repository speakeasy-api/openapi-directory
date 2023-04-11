import { SpeakeasyBase } from "../../../internal/utils";
import { AxiosResponse } from "axios";
export declare class ClaimNetworkDevicesRequestBody extends SpeakeasyBase {
    /**
     * A list of serials of devices to claim
     */
    serials: string[];
}
export declare class ClaimNetworkDevicesRequest extends SpeakeasyBase {
    requestBody: ClaimNetworkDevicesRequestBody;
    networkId: string;
}
export declare class ClaimNetworkDevicesResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
    rawResponse?: AxiosResponse;
}
