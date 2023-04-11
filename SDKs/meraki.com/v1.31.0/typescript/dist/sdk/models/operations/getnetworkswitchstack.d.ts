import { SpeakeasyBase } from "../../../internal/utils";
import { AxiosResponse } from "axios";
export declare class GetNetworkSwitchStackRequest extends SpeakeasyBase {
    networkId: string;
    switchStackId: string;
}
/**
 * Successful operation
 */
export declare class GetNetworkSwitchStack200ApplicationJSON extends SpeakeasyBase {
    /**
     * Switch stacks id
     */
    id?: string;
    /**
     * Switch stacks name
     */
    name?: string;
    /**
     * Serials of the switches in the switch stack
     */
    serials?: string[];
}
export declare class GetNetworkSwitchStackResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
    rawResponse?: AxiosResponse;
    /**
     * Successful operation
     */
    getNetworkSwitchStack200ApplicationJSONObject?: GetNetworkSwitchStack200ApplicationJSON;
}
