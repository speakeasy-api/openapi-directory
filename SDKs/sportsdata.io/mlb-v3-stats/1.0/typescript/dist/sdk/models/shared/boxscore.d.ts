import { SpeakeasyBase } from "../../../internal/utils";
import { Game } from "./game";
import { Inning } from "./inning";
import { PlayerGame } from "./playergame";
import { TeamGame } from "./teamgame";
export declare class BoxScore extends SpeakeasyBase {
    game?: Game;
    innings?: Inning[];
    playerGames?: PlayerGame[];
    teamGames?: TeamGame[];
}
