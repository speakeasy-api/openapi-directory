import { SpeakeasyBase } from "../../../internal/utils";
import { Lineup } from "./lineup";
export declare class StartingLineups extends SpeakeasyBase {
    awayBattingLineup?: Lineup[];
    awayStartingPitcher?: Lineup;
    awayTeam?: string;
    awayTeamID?: number;
    dateTime?: string;
    day?: string;
    gameID?: number;
    homeBattingLineup?: Lineup[];
    homeStartingPitcher?: Lineup;
    homeTeam?: string;
    homeTeamID?: number;
    season?: number;
    seasonType?: number;
    status?: string;
}
