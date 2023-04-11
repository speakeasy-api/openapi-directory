import { SpeakeasyBase } from "../../../internal/utils";
export declare class GroupItemResource extends SpeakeasyBase {
    /**
     * The channel, video, playlist, or asset ID that YouTube uses to uniquely identify the item that is being added to the group.
     */
    id?: string;
    /**
     * Identifies the type of resource being added to the group. Valid values for this property are: * `youtube#channel` * `youtube#playlist` * `youtube#video` * `youtubePartner#asset`
     */
    kind?: string;
}
