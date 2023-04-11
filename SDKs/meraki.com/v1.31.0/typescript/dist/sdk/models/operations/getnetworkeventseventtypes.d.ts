import { SpeakeasyBase } from "../../../internal/utils";
import { AxiosResponse } from "axios";
export declare class GetNetworkEventsEventTypesRequest extends SpeakeasyBase {
    networkId: string;
}
export declare class GetNetworkEventsEventTypes200ApplicationJSON extends SpeakeasyBase {
    /**
     * Event category
     */
    category?: string;
    /**
     * Description of the event
     */
    description?: string;
    /**
     * Event type
     */
    type?: string;
}
export declare class GetNetworkEventsEventTypesResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
    rawResponse?: AxiosResponse;
    /**
     * Successful operation
     */
    getNetworkEventsEventTypes200ApplicationJSONObjects?: GetNetworkEventsEventTypes200ApplicationJSON[];
}
