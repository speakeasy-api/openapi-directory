import { SpeakeasyBase } from "../../../internal/utils";
import { PlayerEvent } from "./playerevent";
/**
 * A ListByPlayer response.
 */
export declare class PlayerEventListResponse extends SpeakeasyBase {
    /**
     * The player events.
     */
    items?: PlayerEvent[];
    /**
     * Uniquely identifies the type of this resource. Value is always the fixed string `games#playerEventListResponse`.
     */
    kind?: string;
    /**
     * The pagination token for the next page of results.
     */
    nextPageToken?: string;
}
