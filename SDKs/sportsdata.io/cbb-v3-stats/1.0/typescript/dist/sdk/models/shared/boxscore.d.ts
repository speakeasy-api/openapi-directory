import { SpeakeasyBase } from "../../../internal/utils";
import { Game } from "./game";
import { Period } from "./period";
import { PlayerGame } from "./playergame";
import { TeamGame } from "./teamgame";
export declare class BoxScore extends SpeakeasyBase {
    game?: Game;
    periods?: Period[];
    playerGames?: PlayerGame[];
    teamGames?: TeamGame[];
}
