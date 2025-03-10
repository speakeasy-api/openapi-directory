import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
/**
 * Desired response format. Valid entries are <code>XML</code> or <code>JSON</code>.
 */
export declare enum TeamGameLogsBySeasonFormatEnum {
    Json = "JSON",
    Xml = "XML"
}
export declare class TeamGameLogsBySeasonRequest extends SpeakeasyBase {
    /**
     * Desired response format. Valid entries are <code>XML</code> or <code>JSON</code>.
     */
    format: TeamGameLogsBySeasonFormatEnum;
    /**
     * How many games to return. Example <code>all</code>, <code>10</code>, <code>25</code>
     */
    numberofgames: string;
    /**
     * Season to get games from. Example <code>2019POST</code>, <code>2020</code>
     */
    season: string;
    /**
     * Unique ID of team.  Example <code> 8 </code>
     */
    teamid: string;
}
export declare class TeamGameLogsBySeasonResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
    rawResponse?: AxiosResponse;
    teamGames?: shared.TeamGame[];
}
