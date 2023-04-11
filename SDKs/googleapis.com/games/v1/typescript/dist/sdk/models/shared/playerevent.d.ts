import { SpeakeasyBase } from "../../../internal/utils";
/**
 * An event status resource.
 */
export declare class PlayerEvent extends SpeakeasyBase {
    /**
     * The ID of the event definition.
     */
    definitionId?: string;
    /**
     * The current number of times this event has occurred, as a string. The formatting of this string depends on the configuration of your event in the Play Games Developer Console.
     */
    formattedNumEvents?: string;
    /**
     * Uniquely identifies the type of this resource. Value is always the fixed string `games#playerEvent`.
     */
    kind?: string;
    /**
     * The current number of times this event has occurred.
     */
    numEvents?: string;
    /**
     * The ID of the player.
     */
    playerId?: string;
}
