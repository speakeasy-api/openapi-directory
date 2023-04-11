import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
/**
 * Desired response format. Valid entries are <code>XML</code> or <code>JSON</code>.
 */
export declare enum BoxScoresDeltaVFormatEnum {
    Xml = "XML",
    Json = "JSON"
}
/**
 * The subcategory of players to include in the returned PlayerGame records. Possible values include:<br><br>
 *
 * @remarks
 * <code>all</code> Returns all players<br>
 * <code>fantasy</code> Returns traditional fantasy players (QB, RB, WR, TE, K, DST)<br>
 * <code>idp</code> Returns traditional fantasy players and IDP players.
 */
export declare enum BoxScoresDeltaVPlayerstoincludeEnum {
    All = "all",
    Fantasy = "fantasy",
    Idp = "idp"
}
export declare class BoxScoresDeltaVRequest extends SpeakeasyBase {
    /**
     * Desired response format. Valid entries are <code>XML</code> or <code>JSON</code>.
     */
    format: BoxScoresDeltaVFormatEnum;
    /**
     * Only returns player statistics that have changed in the last X minutes.  You specify how many minutes in time to go back.  Valid entries are:<br><code>1</code>,
     *
     * @remarks
     *  <code>2</code>, etc.
     *
     */
    minutes: string;
    /**
     * The subcategory of players to include in the returned PlayerGame records. Possible values include:<br><br>
     *
     * @remarks
     * <code>all</code> Returns all players<br>
     * <code>fantasy</code> Returns traditional fantasy players (QB, RB, WR, TE, K, DST)<br>
     * <code>idp</code> Returns traditional fantasy players and IDP players.
     */
    playerstoinclude: BoxScoresDeltaVPlayerstoincludeEnum;
    /**
     * Year of the season and the season type. If no season type is provided, then the default is regular season.
     *
     * @remarks
     *           <br>Examples: <code>2015REG</code>, <code>2015PRE</code>, <code>2015POST</code>.
     *
     */
    season: string;
    /**
     * Week of the season. Valid values are as follows: Preseason 0 to 4, Regular Season 1 to 17, Postseason 1 to 4.
     *
     * @remarks
     *           Example: <code>1</code>
     *
     */
    week: string;
}
export declare class BoxScoresDeltaVResponse extends SpeakeasyBase {
    boxScoreV3s?: shared.BoxScoreV3[];
    contentType: string;
    statusCode: number;
    rawResponse?: AxiosResponse;
}
