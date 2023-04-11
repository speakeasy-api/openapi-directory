import { SpeakeasyBase } from "../../../internal/utils";
import { Penalty } from "./penalty";
import { ScoringPlay } from "./scoringplay";
export declare class Period extends SpeakeasyBase {
    awayScore?: number;
    gameID?: number;
    homeScore?: number;
    name?: string;
    penalties?: Penalty[];
    periodID?: number;
    scoringPlays?: ScoringPlay[];
}
