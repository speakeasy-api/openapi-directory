import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
/**
 * Desired response format. Valid entries are <code>xml</code> or <code>json</code>.
 */
export declare enum TeamGameStatsByWeekFormatEnum {
    Xml = "XML",
    Json = "JSON"
}
export declare class TeamGameStatsByWeekRequest extends SpeakeasyBase {
    /**
     * Desired response format. Valid entries are <code>xml</code> or <code>json</code>.
     */
    format: TeamGameStatsByWeekFormatEnum;
    /**
     *
     * @remarks
     *           Year of the season.
     *           <br>Examples: <code>2015</code>, <code>2016</code>, etc.
     *
     */
    season: string;
    /**
     *
     * @remarks
     *           The week of the game(s).
     *           <br>Examples: <code>1</code>, <code>2</code>, <code>3</code>, etc.
     *
     */
    week: string;
}
export declare class TeamGameStatsByWeekResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
    rawResponse?: AxiosResponse;
    teamGames?: shared.TeamGame[];
}
