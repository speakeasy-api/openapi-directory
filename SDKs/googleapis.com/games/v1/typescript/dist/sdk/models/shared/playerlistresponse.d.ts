import { SpeakeasyBase } from "../../../internal/utils";
import { Player } from "./player";
/**
 * A third party player list response.
 */
export declare class PlayerListResponse extends SpeakeasyBase {
    /**
     * The players.
     */
    items?: Player[];
    /**
     * Uniquely identifies the type of this resource. Value is always the fixed string `games#playerListResponse`.
     */
    kind?: string;
    /**
     * Token corresponding to the next page of results.
     */
    nextPageToken?: string;
}
