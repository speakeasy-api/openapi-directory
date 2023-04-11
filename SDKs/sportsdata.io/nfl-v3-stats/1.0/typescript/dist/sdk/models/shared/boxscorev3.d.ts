import { SpeakeasyBase } from "../../../internal/utils";
import { FantasyDefenseGame } from "./fantasydefensegame";
import { PlayerGame } from "./playergame";
import { Quarter } from "./quarter";
import { Score } from "./score";
import { ScoringDetail } from "./scoringdetail";
import { ScoringPlay } from "./scoringplay";
import { TeamGame } from "./teamgame";
export declare class BoxScoreV3 extends SpeakeasyBase {
    fantasyDefenseGames?: FantasyDefenseGame[];
    playerGames?: PlayerGame[];
    quarters?: Quarter[];
    score?: Score;
    scoringDetails?: ScoringDetail[];
    scoringPlays?: ScoringPlay[];
    teamGames?: TeamGame[];
}
