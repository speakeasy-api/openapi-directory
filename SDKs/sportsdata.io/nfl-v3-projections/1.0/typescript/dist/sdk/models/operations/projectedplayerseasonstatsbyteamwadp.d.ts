import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
/**
 * Desired response format. Valid entries are <code>XML</code> or <code>JSON</code>.
 */
export declare enum ProjectedPlayerSeasonStatsByTeamWAdpFormatEnum {
    Xml = "XML",
    Json = "JSON"
}
export declare class ProjectedPlayerSeasonStatsByTeamWAdpRequest extends SpeakeasyBase {
    /**
     * Desired response format. Valid entries are <code>XML</code> or <code>JSON</code>.
     */
    format: ProjectedPlayerSeasonStatsByTeamWAdpFormatEnum;
    /**
     * Year of the season and the season type. If no season type is provided, then the default is regular season.
     *
     * @remarks
     *           <br>Examples: <code>2015REG</code>, <code>2015PRE</code>, <code>2015POST</code>.
     *
     */
    season: string;
    /**
     * Abbreviation of the team. Example: <code>WAS</code>.
     */
    team: string;
}
export declare class ProjectedPlayerSeasonStatsByTeamWAdpResponse extends SpeakeasyBase {
    contentType: string;
    playerSeasonProjections?: shared.PlayerSeasonProjection[];
    statusCode: number;
    rawResponse?: AxiosResponse;
}
