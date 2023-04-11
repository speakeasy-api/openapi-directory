import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
/**
 * Desired response format. Valid entries are <code>XML</code> or <code>JSON</code>.
 */
export declare enum PlayerSeasonStatsFormatEnum {
    Xml = "XML",
    Json = "JSON"
}
export declare class PlayerSeasonStatsRequest extends SpeakeasyBase {
    /**
     * Desired response format. Valid entries are <code>XML</code> or <code>JSON</code>.
     */
    format: PlayerSeasonStatsFormatEnum;
    /**
     * Year of the season.
     *
     * @remarks
     * <br>Examples: <code>2015</code>, <code>2016</code>.
     */
    season: string;
}
export declare class PlayerSeasonStatsResponse extends SpeakeasyBase {
    contentType: string;
    playerSeasons?: shared.PlayerSeason[];
    statusCode: number;
    rawResponse?: AxiosResponse;
}
