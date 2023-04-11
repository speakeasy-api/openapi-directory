import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
/**
 * Desired response format. Valid entries are <code>XML</code> or <code>JSON</code>.
 */
export declare enum ProjectedPlayerGameStatsByPlayerFormatEnum {
    Xml = "XML",
    Json = "JSON"
}
export declare class ProjectedPlayerGameStatsByPlayerRequest extends SpeakeasyBase {
    /**
     * The date of the game(s).
     *
     * @remarks
     * <br>Examples: <code>2018-FEB-27</code>, <code>2017-DEC-01</code>.
     */
    date: string;
    /**
     * Desired response format. Valid entries are <code>XML</code> or <code>JSON</code>.
     */
    format: ProjectedPlayerGameStatsByPlayerFormatEnum;
    /**
     * Unique FantasyData Player ID.
     *
     * @remarks
     * Example:<code>60003802</code>.
     */
    playerid: string;
}
export declare class ProjectedPlayerGameStatsByPlayerResponse extends SpeakeasyBase {
    contentType: string;
    playerGameProjection?: shared.PlayerGameProjection;
    statusCode: number;
    rawResponse?: AxiosResponse;
}
