import { SpeakeasyBase } from "../../../internal/utils";
import { Game } from "./game";
import { Match } from "./match";
import { PlayerGame } from "./playergame";
import { TeamGame } from "./teamgame";
export declare class BoxScore extends SpeakeasyBase {
    game?: Game;
    matches?: Match[];
    playerGames?: PlayerGame[];
    teamGames?: TeamGame[];
}
