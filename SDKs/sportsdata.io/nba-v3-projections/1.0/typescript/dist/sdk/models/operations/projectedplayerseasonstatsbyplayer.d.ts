import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
/**
 * Desired response format. Valid entries are <code>XML</code> or <code>JSON</code>.
 */
export declare enum ProjectedPlayerSeasonStatsByPlayerFormatEnum {
    Xml = "XML",
    Json = "JSON"
}
export declare class ProjectedPlayerSeasonStatsByPlayerRequest extends SpeakeasyBase {
    /**
     * Desired response format. Valid entries are <code>XML</code> or <code>JSON</code>.
     */
    format: ProjectedPlayerSeasonStatsByPlayerFormatEnum;
    /**
     * Unique FantasyData Player ID. Example:<code>20000571</code>.
     */
    playerid: string;
    /**
     * Year of the season (with optional season type).<br>Examples: <code>2018</code>, <code>2019</code>, etc.
     */
    season: string;
}
export declare class ProjectedPlayerSeasonStatsByPlayerResponse extends SpeakeasyBase {
    contentType: string;
    playerSeasonProjection?: shared.PlayerSeasonProjection;
    statusCode: number;
    rawResponse?: AxiosResponse;
}
