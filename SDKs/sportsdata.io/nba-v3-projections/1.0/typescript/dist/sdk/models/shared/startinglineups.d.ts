import { SpeakeasyBase } from "../../../internal/utils";
import { Lineup } from "./lineup";
export declare class StartingLineups extends SpeakeasyBase {
    awayLineup?: Lineup[];
    awayTeam?: string;
    awayTeamID?: number;
    dateTime?: string;
    day?: string;
    gameID?: number;
    homeLineup?: Lineup[];
    homeTeam?: string;
    homeTeamID?: number;
    season?: number;
    seasonType?: number;
    status?: string;
}
