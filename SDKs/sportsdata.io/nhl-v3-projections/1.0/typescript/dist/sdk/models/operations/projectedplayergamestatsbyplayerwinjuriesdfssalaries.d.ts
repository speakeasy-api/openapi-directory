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
     * The date of the game(s).
     *
     * @remarks
     *  <br>Examples: <code>2018-JAN-31</code>, <code>2017-OCT-01</code>.
     *
     */
    date: string;
    /**
     * Desired response format. Valid entries are <code>XML</code> or <code>JSON</code>.
     */
    format: ProjectedPlayerGameStatsByPlayerWInjuriesDfsSalariesFormatEnum;
    /**
     * Unique FantasyData Player ID.
     *
     * @remarks
     * Example:<code>30000378</code>.
     */
    playerid: string;
}
export declare class ProjectedPlayerGameStatsByPlayerWInjuriesDfsSalariesResponse extends SpeakeasyBase {
    contentType: string;
    playerGameProjection?: shared.PlayerGameProjection;
    statusCode: number;
    rawResponse?: AxiosResponse;
}
