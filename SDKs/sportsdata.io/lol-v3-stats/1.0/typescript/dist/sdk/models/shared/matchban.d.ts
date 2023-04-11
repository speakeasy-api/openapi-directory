import { SpeakeasyBase } from "../../../internal/utils";
import { ChampionInfo } from "./championinfo";
export declare class MatchBan extends SpeakeasyBase {
    champion?: ChampionInfo;
    championId?: number;
    matchId?: number;
    teamId?: number;
}
