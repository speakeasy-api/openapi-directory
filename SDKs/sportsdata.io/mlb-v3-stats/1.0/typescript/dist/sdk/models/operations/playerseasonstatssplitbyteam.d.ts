import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
/**
 * Desired response format. Valid entries are <code>XML</code> or <code>JSON</code>.
 */
export declare enum PlayerSeasonStatsSplitByTeamFormatEnum {
    Xml = "XML",
    Json = "JSON"
}
export declare class PlayerSeasonStatsSplitByTeamRequest extends SpeakeasyBase {
    /**
     * Desired response format. Valid entries are <code>XML</code> or <code>JSON</code>.
     */
    format: PlayerSeasonStatsSplitByTeamFormatEnum;
    /**
     * Year of the season.
     *
     * @remarks
     * <br>Examples: <code>2017</code>, <code>2018</code>.
     */
    season: string;
}
export declare class PlayerSeasonStatsSplitByTeamResponse extends SpeakeasyBase {
    contentType: string;
    playerSeasons?: shared.PlayerSeason[];
    statusCode: number;
    rawResponse?: AxiosResponse;
}
