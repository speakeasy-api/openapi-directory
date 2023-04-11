import { SpeakeasyBase } from "../../../internal/utils";
import { Game } from "./game";
import { PlayerGame } from "./playergame";
import { Quarter } from "./quarter";
import { TeamGame } from "./teamgame";
export declare class BoxScore extends SpeakeasyBase {
    game?: Game;
    playerGames?: PlayerGame[];
    quarters?: Quarter[];
    teamGames?: TeamGame[];
}
