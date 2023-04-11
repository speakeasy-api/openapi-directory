import { SpeakeasyBase } from "../../../internal/utils";
/**
 * Freebase topic information related to the channel.
 */
export declare class ChannelTopicDetails extends SpeakeasyBase {
    /**
     * A list of Wikipedia URLs that describe the channel's content.
     */
    topicCategories?: string[];
    /**
     * A list of Freebase topic IDs associated with the channel. You can retrieve information about each topic using the Freebase Topic API.
     */
    topicIds?: string[];
}
