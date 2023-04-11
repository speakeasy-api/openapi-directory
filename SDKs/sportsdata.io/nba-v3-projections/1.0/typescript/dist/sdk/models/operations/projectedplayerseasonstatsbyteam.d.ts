import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
/**
 * Desired response format. Valid entries are <code>XML</code> or <code>JSON</code>.
 */
export declare enum ProjectedPlayerSeasonStatsByTeamFormatEnum {
    Xml = "XML",
    Json = "JSON"
}
export declare class ProjectedPlayerSeasonStatsByTeamRequest extends SpeakeasyBase {
    /**
     * Desired response format. Valid entries are <code>XML</code> or <code>JSON</code>.
     */
    format: ProjectedPlayerSeasonStatsByTeamFormatEnum;
    /**
     * Year of the season (with optional season type).<br>Examples: <code>2018</code>, <code>2019</code>, etc.
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
export declare class ProjectedPlayerSeasonStatsByTeamResponse extends SpeakeasyBase {
    contentType: string;
    playerSeasonProjections?: shared.PlayerSeasonProjection[];
    statusCode: number;
    rawResponse?: AxiosResponse;
}
