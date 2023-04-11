import { SpeakeasyBase } from "../../../internal/utils";
import { AxiosResponse } from "axios";
export declare class RemoveNetworkSwitchStackRequestBody extends SpeakeasyBase {
    /**
     * The serial of the switch to be removed
     */
    serial: string;
}
export declare class RemoveNetworkSwitchStackRequest extends SpeakeasyBase {
    requestBody: RemoveNetworkSwitchStackRequestBody;
    networkId: string;
    switchStackId: string;
}
export declare class RemoveNetworkSwitchStackResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
    rawResponse?: AxiosResponse;
    /**
     * Successful operation
     */
    removeNetworkSwitchStack200ApplicationJSONObject?: Record<string, any>;
}
