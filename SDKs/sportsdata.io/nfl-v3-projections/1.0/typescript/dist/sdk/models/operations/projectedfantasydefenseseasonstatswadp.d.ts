import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
/**
 * Desired response format. Valid entries are <code>XML</code> or <code>JSON</code>.
 */
export declare enum ProjectedFantasyDefenseSeasonStatsWAdpFormatEnum {
    Xml = "XML",
    Json = "JSON"
}
export declare class ProjectedFantasyDefenseSeasonStatsWAdpRequest extends SpeakeasyBase {
    /**
     * Desired response format. Valid entries are <code>XML</code> or <code>JSON</code>.
     */
    format: ProjectedFantasyDefenseSeasonStatsWAdpFormatEnum;
    /**
     * Year of the season and the season type. If no season type is provided, then the default is regular season.
     *
     * @remarks
     *           <br>Examples: <code>2015REG</code>, <code>2015PRE</code>, <code>2015POST</code>.
     *
     */
    season: string;
}
export declare class ProjectedFantasyDefenseSeasonStatsWAdpResponse extends SpeakeasyBase {
    contentType: string;
    fantasyDefenseSeasonProjections?: shared.FantasyDefenseSeasonProjection[];
    statusCode: number;
    rawResponse?: AxiosResponse;
}
