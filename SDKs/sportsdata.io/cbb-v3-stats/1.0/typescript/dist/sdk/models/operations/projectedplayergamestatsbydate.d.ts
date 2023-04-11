import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
/**
 * Desired response format. Valid entries are <code>XML</code> or <code>JSON</code>.
 */
export declare enum ProjectedPlayerGameStatsByDateFormatEnum {
    Xml = "XML",
    Json = "JSON"
}
export declare class ProjectedPlayerGameStatsByDateRequest extends SpeakeasyBase {
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
    format: ProjectedPlayerGameStatsByDateFormatEnum;
}
export declare class ProjectedPlayerGameStatsByDateResponse extends SpeakeasyBase {
    contentType: string;
    playerGameProjections?: shared.PlayerGameProjection[];
    statusCode: number;
    rawResponse?: AxiosResponse;
}
