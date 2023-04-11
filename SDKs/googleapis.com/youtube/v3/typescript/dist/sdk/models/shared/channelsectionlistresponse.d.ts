import { SpeakeasyBase } from "../../../internal/utils";
import { ChannelSection } from "./channelsection";
/**
 * Successful response
 */
export declare class ChannelSectionListResponse extends SpeakeasyBase {
    /**
     * Etag of this resource.
     */
    etag?: string;
    /**
     * Serialized EventId of the request which produced this response.
     */
    eventId?: string;
    /**
     * A list of ChannelSections that match the request criteria.
     */
    items?: ChannelSection[];
    /**
     * Identifies what kind of resource this is. Value: the fixed string "youtube#channelSectionListResponse".
     */
    kind?: string;
    /**
     * The visitorId identifies the visitor.
     */
    visitorId?: string;
}
