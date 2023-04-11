import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
/**
 * Response member you would like results sorted by.
 */
export declare enum LeagueLeadersBySeasonColumnEnum {
    FantasyPoints = "FantasyPoints",
    PassingYards = "PassingYards",
    RushingYards = "RushingYards",
    Receptions = "Receptions",
    Sacks = "Sacks",
    Interceptions = "Interceptions",
    Touchdowns = "Touchdowns"
}
/**
 * Desired response format. Valid entries are <code>XML</code> or <code>JSON</code>.
 */
export declare enum LeagueLeadersBySeasonFormatEnum {
    Xml = "XML",
    Json = "JSON"
}
/**
 * Playerâ€™s position that you would like to filter by.
 */
export declare enum LeagueLeadersBySeasonPositionEnum {
    All = "ALL",
    Offense = "OFFENSE",
    Qb = "QB",
    Rb = "RB",
    Wr = "WR",
    Te = "TE",
    Defense = "DEFENSE",
    Dl = "DL",
    Lb = "LB",
    Db = "DB",
    K = "K"
}
export declare class LeagueLeadersBySeasonRequest extends SpeakeasyBase {
    /**
     * Response member you would like results sorted by.
     */
    column: LeagueLeadersBySeasonColumnEnum;
    /**
     * Desired response format. Valid entries are <code>XML</code> or <code>JSON</code>.
     */
    format: LeagueLeadersBySeasonFormatEnum;
    /**
     * Playerâ€™s position that you would like to filter by.
     */
    position: LeagueLeadersBySeasonPositionEnum;
    /**
     *
     * @remarks
     *           Year of the season and the season type. If no season type is provided, then the default is regular season.
     *           <br>Examples: <code>2015REG</code>, <code>2015PRE</code>, <code>2015POST</code>.
     *
     */
    season: string;
}
export declare class LeagueLeadersBySeasonResponse extends SpeakeasyBase {
    contentType: string;
    playerSeasons?: shared.PlayerSeason[];
    statusCode: number;
    rawResponse?: AxiosResponse;
}
