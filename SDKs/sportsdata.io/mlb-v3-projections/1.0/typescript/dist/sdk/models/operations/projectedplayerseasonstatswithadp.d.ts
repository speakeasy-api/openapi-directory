import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
/**
 * Desired response format. Valid entries are <code>XML</code> or <code>JSON</code>.
 */
export declare enum ProjectedPlayerSeasonStatsWithAdpFormatEnum {
    Xml = "XML",
    Json = "JSON"
}
export declare class ProjectedPlayerSeasonStatsWithAdpRequest extends SpeakeasyBase {
    /**
     * Desired response format. Valid entries are <code>XML</code> or <code>JSON</code>.
     */
    format: ProjectedPlayerSeasonStatsWithAdpFormatEnum;
    /**
     * Year of the season.
     *
     * @remarks
     * <br>Examples: <code>2017</code>, <code>2018</code>.
     */
    season: string;
}
export declare class ProjectedPlayerSeasonStatsWithAdpResponse extends SpeakeasyBase {
    contentType: string;
    playerSeasonProjections?: shared.PlayerSeasonProjection[];
    statusCode: number;
    rawResponse?: AxiosResponse;
}
