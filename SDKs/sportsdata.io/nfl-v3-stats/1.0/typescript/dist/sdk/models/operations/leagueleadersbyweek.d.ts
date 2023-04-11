import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
/**
 * Response member you would like results sorted by.
 */
export declare enum LeagueLeadersByWeekColumnEnum {
    FantasyPoints = "FantasyPoints",
    PassingYards = "PassingYards",
    RushingYards = "RushingYards",
    Receptions = "Receptions",
    Sacks = "Sacks",
    Interceptions = "Interceptions",
    Touchdowns = "Touchdowns"
}
/**
 *
 * @remarks
 *           Desired response format. Valid entries are <code>XML</code> or <code>JSON</code>.
 *
 */
export declare enum LeagueLeadersByWeekFormatEnum {
    Xml = "XML",
    Json = "JSON"
}
/**
 * Playerâ€™s position that you would like to filter by.
 */
export declare enum LeagueLeadersByWeekPositionEnum {
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
export declare class LeagueLeadersByWeekRequest extends SpeakeasyBase {
    /**
     * Response member you would like results sorted by.
     */
    column: LeagueLeadersByWeekColumnEnum;
    /**
     *
     * @remarks
     *           Desired response format. Valid entries are <code>XML</code> or <code>JSON</code>.
     *
     */
    format: LeagueLeadersByWeekFormatEnum;
    /**
     * Playerâ€™s position that you would like to filter by.
     */
    position: LeagueLeadersByWeekPositionEnum;
    /**
     *
     * @remarks
     *           Year of the season and the season type. If no season type is provided, then the default is regular season.
     *           <br>Examples: <code>2015REG</code>, <code>2015PRE</code>, <code>2015POST</code>.
     *
     */
    season: string;
    /**
     *
     * @remarks
     *           Week of the season. Valid values are as follows: Preseason 0 to 4, Regular Season 1 to 17, Postseason 1 to 4.
     *           Example: <code>1</code>
     *
     */
    week: string;
}
export declare class LeagueLeadersByWeekResponse extends SpeakeasyBase {
    contentType: string;
    playerGames?: shared.PlayerGame[];
    statusCode: number;
    rawResponse?: AxiosResponse;
}
