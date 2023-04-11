import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
/**
 * Desired response format. Valid entries are <code>XML</code> or <code>JSON</code>.
 */
export declare enum PlayerSeasonStatsByPlayerFormatEnum {
    Xml = "XML",
    Json = "JSON"
}
export declare class PlayerSeasonStatsByPlayerRequest extends SpeakeasyBase {
    /**
     * Desired response format. Valid entries are <code>XML</code> or <code>JSON</code>.
     */
    format: PlayerSeasonStatsByPlayerFormatEnum;
    /**
     * Unique FantasyData Player ID.
     *
     * @remarks
     * Example:<code>10000507</code>.
     */
    playerid: string;
    /**
     * Year of the season.
     *
     * @remarks
     * <br>Examples: <code>2017</code>, <code>2018</code>.
     */
    season: string;
}
export declare class PlayerSeasonStatsByPlayerResponse extends SpeakeasyBase {
    contentType: string;
    playerSeason?: shared.PlayerSeason;
    statusCode: number;
    rawResponse?: AxiosResponse;
}
