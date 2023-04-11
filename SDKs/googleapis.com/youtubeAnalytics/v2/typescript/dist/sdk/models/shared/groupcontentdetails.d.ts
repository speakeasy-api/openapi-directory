import { SpeakeasyBase } from "../../../internal/utils";
/**
 * A group's content details.
 */
export declare class GroupContentDetails extends SpeakeasyBase {
    /**
     * The number of items in the group.
     */
    itemCount?: string;
    /**
     * The type of resources that the group contains. Valid values for this property are: * `youtube#channel` * `youtube#playlist` * `youtube#video` * `youtubePartner#asset`
     */
    itemType?: string;
}
