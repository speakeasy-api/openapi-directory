import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
/**
 * Desired response format. Valid entries are <code>XML</code> or <code>JSON</code>.
 */
export declare enum TeamSeasonStatsFormatEnum {
    Xml = "XML",
    Json = "JSON"
}
export declare class TeamSeasonStatsRequest extends SpeakeasyBase {
    /**
     * Desired response format. Valid entries are <code>XML</code> or <code>JSON</code>.
     */
    format: TeamSeasonStatsFormatEnum;
    /**
     * Year of the season.
     *
     * @remarks
     * <br>Examples: <code>2017</code>, <code>2018</code>.
     */
    season: string;
}
export declare class TeamSeasonStatsResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
    rawResponse?: AxiosResponse;
    teamSeasons?: shared.TeamSeason[];
}
