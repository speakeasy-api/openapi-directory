import { SpeakeasyBase } from "../../../internal/utils";
import { HiddenPlayer } from "./hiddenplayer";
/**
 * A list of hidden players.
 */
export declare class HiddenPlayerList extends SpeakeasyBase {
    /**
     * The players.
     */
    items?: HiddenPlayer[];
    /**
     * Uniquely identifies the type of this resource. Value is always the fixed string `gamesManagement#hiddenPlayerList`.
     */
    kind?: string;
    /**
     * The pagination token for the next page of results.
     */
    nextPageToken?: string;
}
