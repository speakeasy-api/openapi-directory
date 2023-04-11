import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
/**
 * Desired response format. Valid entries are <code>XML</code> or <code>JSON</code>.
 */
export declare enum ProjectedPlayerSeasonStatsByPlayerWAdpFormatEnum {
    Xml = "XML",
    Json = "JSON"
}
export declare class ProjectedPlayerSeasonStatsByPlayerWAdpRequest extends SpeakeasyBase {
    /**
     * Desired response format. Valid entries are <code>XML</code> or <code>JSON</code>.
     */
    format: ProjectedPlayerSeasonStatsByPlayerWAdpFormatEnum;
    /**
     * Each NFL player has a unique ID assigned by FantasyData. Player IDs can be determined by pulling player related data. Example:<code>14257</code>.
     */
    playerid: string;
    /**
     * Year of the season and the season type. If no season type is provided, then the default is regular season.
     *
     * @remarks
     *           <br>Examples: <code>2015REG</code>, <code>2015PRE</code>, <code>2015POST</code>.
     *
     */
    season: string;
}
export declare class ProjectedPlayerSeasonStatsByPlayerWAdpResponse extends SpeakeasyBase {
    contentType: string;
    playerSeasonProjection?: shared.PlayerSeasonProjection;
    statusCode: number;
    rawResponse?: AxiosResponse;
}
