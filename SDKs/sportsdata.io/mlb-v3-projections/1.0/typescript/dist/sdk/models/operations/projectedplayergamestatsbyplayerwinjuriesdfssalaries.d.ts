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
     * <br>Examples: <code>2017-JUL-31</code>, <code>2017-SEP-01</code>.
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
     * Example:<code>10000507</code>.
     */
    playerid: string;
}
export declare class ProjectedPlayerGameStatsByPlayerWInjuriesDfsSalariesResponse extends SpeakeasyBase {
    contentType: string;
    playerGameProjections?: shared.PlayerGameProjection[];
    statusCode: number;
    rawResponse?: AxiosResponse;
}
