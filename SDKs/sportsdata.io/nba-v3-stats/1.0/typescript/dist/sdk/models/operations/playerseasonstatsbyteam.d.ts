import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
/**
 * Desired response format. Valid entries are <code>XML</code> or <code>JSON</code>.
 */
export declare enum PlayerSeasonStatsByTeamFormatEnum {
    Xml = "XML",
    Json = "JSON"
}
export declare class PlayerSeasonStatsByTeamRequest extends SpeakeasyBase {
    /**
     * Desired response format. Valid entries are <code>XML</code> or <code>JSON</code>.
     */
    format: PlayerSeasonStatsByTeamFormatEnum;
    /**
     * Year of the season.
     *
     * @remarks
     * <br>Examples: <code>2015</code>, <code>2016</code>.
     *
     */
    season: string;
    /**
     * The abbreviation of the requested team.
     *
     * @remarks
     * <br>Examples: <code>MIA</code>, <code>PHI</code>.
     */
    team: string;
}
export declare class PlayerSeasonStatsByTeamResponse extends SpeakeasyBase {
    contentType: string;
    playerSeasons?: shared.PlayerSeason[];
    statusCode: number;
    rawResponse?: AxiosResponse;
}
