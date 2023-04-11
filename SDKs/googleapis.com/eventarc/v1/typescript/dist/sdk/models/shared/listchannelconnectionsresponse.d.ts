import { SpeakeasyBase } from "../../../internal/utils";
import { ChannelConnection } from "./channelconnection";
/**
 * The response message for the `ListChannelConnections` method.
 */
export declare class ListChannelConnectionsResponse extends SpeakeasyBase {
    /**
     * The requested channel connections, up to the number specified in `page_size`.
     */
    channelConnections?: ChannelConnection[];
    /**
     * A page token that can be sent to `ListChannelConnections` to request the next page. If this is empty, then there are no more pages.
     */
    nextPageToken?: string;
    /**
     * Unreachable resources, if any.
     */
    unreachable?: string[];
}
