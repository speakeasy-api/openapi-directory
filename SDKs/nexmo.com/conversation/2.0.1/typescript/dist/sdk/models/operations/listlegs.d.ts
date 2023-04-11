import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
export declare class ListLegs200ApplicationJSONEmbeddedLegs extends SpeakeasyBase {
    embedded?: Record<string, any>;
    links?: Record<string, any>;
    /**
     * The unique identifier for this conversation
     */
    conversationUuid?: string;
    from?: Record<string, any>;
    /**
     * Time of leg end
     */
    startEnd?: string;
    /**
     * Time of leg start
     */
    startTime?: string;
    /**
     * Leg Status
     */
    state?: shared.LegStateEnum;
    to?: Record<string, any>;
    /**
     * Channel type
     */
    type?: shared.ChannelTypeEnum;
    /**
     * The id of the leg. rtc_id and call_id are leg id
     */
    uuid: string;
}
/**
 * A list of conversation objects. See the [get details of a specific conversation](#retrieveConversation) response fields for a description of the nested objects
 */
export declare class ListLegs200ApplicationJSONEmbedded extends SpeakeasyBase {
    legs: ListLegs200ApplicationJSONEmbeddedLegs[];
}
export declare class ListLegs200ApplicationJSONLinksSelf extends SpeakeasyBase {
    href?: string;
}
export declare class ListLegs200ApplicationJSONLinks extends SpeakeasyBase {
    self: ListLegs200ApplicationJSONLinksSelf;
}
/**
 * List Legs Response Payload Object
 */
export declare class ListLegs200ApplicationJSON extends SpeakeasyBase {
    /**
     * A list of conversation objects. See the [get details of a specific conversation](#retrieveConversation) response fields for a description of the nested objects
     */
    embedded: ListLegs200ApplicationJSONEmbedded;
    links: ListLegs200ApplicationJSONLinks;
    /**
     * The total number of records returned by your request.
     */
    count: number;
    /**
     * The amount of records returned in this response
     */
    pageSize: number;
    /**
     * Return `page_size` amount of conversations from this index in the response. That is, if your request returns 300 conversations, set `record_index` to 5 in order to return conversations 50 to 59. The default value is 0. That is, the first `page_size` calls.
     */
    recordIndex: number;
}
export declare class ListLegsResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
    rawResponse?: AxiosResponse;
    /**
     * List Legs Successfully
     */
    listLegs200ApplicationJSONObject?: ListLegs200ApplicationJSON;
}
