import { SpeakeasyBase } from "../../../internal/utils";
import { Goaltender } from "./goaltender";
export declare class StartingGoaltenders extends SpeakeasyBase {
    awayGoaltender?: Goaltender;
    awayTeam?: string;
    awayTeamID?: number;
    dateTime?: string;
    day?: string;
    gameID?: number;
    homeGoaltender?: Goaltender;
    homeTeam?: string;
    homeTeamID?: number;
    season?: number;
    seasonType?: number;
    status?: string;
}
