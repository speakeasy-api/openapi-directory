import { SpeakeasyBase } from "../../../internal/utils";
/**
 * Scoped player identifiers.
 */
export declare class ScopedPlayerIds extends SpeakeasyBase {
    /**
     * Identifier of the player across all games of the given developer. Every player has the same developer_player_key in all games of one developer. Developer player key changes for the game if the game is transferred to another developer. Note that game_player_id will stay unchanged.
     */
    developerPlayerKey?: string;
    /**
     * Game-scoped player identifier. This is the same id that is returned in GetPlayer game_player_id field.
     */
    gamePlayerId?: string;
}
