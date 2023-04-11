import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
/**
 * Desired response format. Valid entries are <code>XML</code> or <code>JSON</code>.
 */
export declare enum ProjectedPlayerGameStatsByDateWInjuriesDfsSalariesFormatEnum {
    Xml = "XML",
    Json = "JSON"
}
export declare class ProjectedPlayerGameStatsByDateWInjuriesDfsSalariesRequest extends SpeakeasyBase {
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
    format: ProjectedPlayerGameStatsByDateWInjuriesDfsSalariesFormatEnum;
}
export declare class ProjectedPlayerGameStatsByDateWInjuriesDfsSalariesResponse extends SpeakeasyBase {
    contentType: string;
    playerGameProjections?: shared.PlayerGameProjection[];
    statusCode: number;
    rawResponse?: AxiosResponse;
}
