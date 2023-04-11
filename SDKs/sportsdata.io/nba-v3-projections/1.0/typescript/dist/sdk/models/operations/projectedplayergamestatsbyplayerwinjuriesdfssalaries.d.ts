import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
/**
 * Desired response format. Valid entries are <code>XML</code> or <code>JSON</code>.
 */
export declare enum ProjectedPlayerGameStatsByPlayerWInjuriesDfsSalariesFormatEnum {
    Xml = "XML",
    Json = "JSON"
}
export declare class ProjectedPlayerGameStatsByPlayerWInjuriesDfsSalariesRequest extends SpeakeasyBase {
    /**
     * The date of the game(s).<br>Examples: <code>2015-JUL-31</code>, <code>2015-SEP-01</code>.
     */
    date: string;
    /**
     * Desired response format. Valid entries are <code>XML</code> or <code>JSON</code>.
     */
    format: ProjectedPlayerGameStatsByPlayerWInjuriesDfsSalariesFormatEnum;
    /**
     * Unique FantasyData Player ID. Example:<code>20000571</code>.
     */
    playerid: string;
}
export declare class ProjectedPlayerGameStatsByPlayerWInjuriesDfsSalariesResponse extends SpeakeasyBase {
    contentType: string;
    playerGameProjection?: shared.PlayerGameProjection;
    statusCode: number;
    rawResponse?: AxiosResponse;
}
