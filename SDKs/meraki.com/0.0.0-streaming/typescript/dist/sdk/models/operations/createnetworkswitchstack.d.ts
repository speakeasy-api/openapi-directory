import { SpeakeasyBase } from "../../../internal/utils";
import { AxiosResponse } from "axios";
export declare class CreateNetworkSwitchStackRequestBody extends SpeakeasyBase {
    /**
     * The name of the new stack
     */
    name: string;
    /**
     * An array of switch serials to be added into the new stack
     */
    serials: string[];
}
export declare class CreateNetworkSwitchStackRequest extends SpeakeasyBase {
    requestBody: CreateNetworkSwitchStackRequestBody;
    networkId: string;
}
export declare class CreateNetworkSwitchStackResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
    rawResponse?: AxiosResponse;
    /**
     * Successful operation
     */
    createNetworkSwitchStack201ApplicationJSONObject?: Record<string, any>;
}
