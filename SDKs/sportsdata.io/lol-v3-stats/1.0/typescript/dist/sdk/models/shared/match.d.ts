import { SpeakeasyBase } from "../../../internal/utils";
import { MatchBan } from "./matchban";
import { PlayerMatch } from "./playermatch";
import { TeamMatch } from "./teammatch";
export declare class Match extends SpeakeasyBase {
    gameId?: number;
    gameVersion?: string;
    mapName?: string;
    matchBans?: MatchBan[];
    number?: number;
    playerMatches?: PlayerMatch[];
    teamMatches?: TeamMatch[];
    winningTeamId?: number;
}
