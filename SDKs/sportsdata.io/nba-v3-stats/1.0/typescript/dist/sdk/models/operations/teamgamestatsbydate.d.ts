import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
/**
 * Desired response format. Valid entries are <code>XML</code> or <code>JSON</code>.
 */
export declare enum TeamGameStatsByDateFormatEnum {
    Xml = "XML",
    Json = "JSON"
}
export declare class TeamGameStatsByDateRequest extends SpeakeasyBase {
    /**
     * The date of the game(s).
     *
     * @remarks
     * <br>Examples: <code>2015-JUL-31</code>, <code>2015-SEP-01</code>.
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
