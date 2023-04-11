import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
/**
 * Desired response format. Valid entries are <code>XML</code> or <code>JSON</code>.
 */
export declare enum TeamScheduleFormatEnum {
    Xml = "XML",
    Json = "JSON"
}
export declare class TeamScheduleRequest extends SpeakeasyBase {
    /**
     * Desired response format. Valid entries are <code>XML</code> or <code>JSON</code>.
     */
    format: TeamScheduleFormatEnum;
    /**
     * Year of the season (with optional season type).<br>Examples: <code>2018</code>, <code>2018PRE</code>, <code>2018POST</code>, <code>2018STAR</code>, <code>2019</code>, etc.
     */
    season: string;
    /**
     * The abbreviation of the requested team.
     *
     * @remarks
     * Examples: <code>SF</code>, <code>NYY</code>.
     */
    team: string;
}
export declare class TeamScheduleResponse extends SpeakeasyBase {
    contentType: string;
    games?: shared.Game[];
    statusCode: number;
    rawResponse?: AxiosResponse;
}
