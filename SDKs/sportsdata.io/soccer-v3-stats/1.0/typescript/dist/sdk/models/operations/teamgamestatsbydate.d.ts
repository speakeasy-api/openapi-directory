import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
/**
 * Desired response format. Valid entries are <code>XML</code> or <code>JSON</code>.
 */
export declare enum TeamGameStatsByDateFormatEnum {
    Xml = "xml",
    Json = "json"
}
export declare class TeamGameStatsByDateRequest extends SpeakeasyBase {
    /**
     * The date of the game(s).
     *
     * @remarks
     * <br>Examples: <code>2017-02-27</code>, <code>2017-09-01</code>.
     */
    date: string;
    /**
     * Desired response format. Valid entries are <code>XML</code> or <code>JSON</code>.
     */
    format: TeamGameStatsByDateFormatEnum;
}
export declare class TeamGameStatsByDateResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
    rawResponse?: AxiosResponse;
    teamGames?: shared.TeamGame[];
}
