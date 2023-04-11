import { SpeakeasyBase } from "../../../internal/utils";
import { AxiosResponse } from "axios";
export declare class AddNetworkSwitchStackRequestBody extends SpeakeasyBase {
    /**
     * The serial of the switch to be added
     */
    serial: string;
}
export declare class AddNetworkSwitchStackRequest extends SpeakeasyBase {
    requestBody: AddNetworkSwitchStackRequestBody;
    networkId: string;
    switchStackId: string;
}
export declare class AddNetworkSwitchStackResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
    rawResponse?: AxiosResponse;
    /**
     * Successful operation
     */
    addNetworkSwitchStack200ApplicationJSONObject?: Record<string, any>;
}
