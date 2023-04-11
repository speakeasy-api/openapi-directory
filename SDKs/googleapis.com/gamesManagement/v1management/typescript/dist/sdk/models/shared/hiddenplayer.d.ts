import { SpeakeasyBase } from "../../../internal/utils";
import { Player } from "./player";
/**
 * The HiddenPlayer resource.
 */
export declare class HiddenPlayer extends SpeakeasyBase {
    /**
     * Output only. The time this player was hidden.
     */
    hiddenTimeMillis?: string;
    /**
     * Output only. Uniquely identifies the type of this resource. Value is always the fixed string `gamesManagement#hiddenPlayer`.
     */
    kind?: string;
    /**
     * A Player resource.
     */
    player?: Player;
}
