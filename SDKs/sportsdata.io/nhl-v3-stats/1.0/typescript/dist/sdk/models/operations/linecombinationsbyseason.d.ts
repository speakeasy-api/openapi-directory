import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
/**
 * Desired response format. Valid entries are <code>XML</code> or <code>JSON</code>.
 */
export declare enum LineCombinationsBySeasonFormatEnum {
    Xml = "XML",
    Json = "JSON"
}
export declare class LineCombinationsBySeasonRequest extends SpeakeasyBase {
    /**
     * Desired response format. Valid entries are <code>XML</code> or <code>JSON</code>.
     */
    format: LineCombinationsBySeasonFormatEnum;
    /**
     * Year of the season.
     *
     * @remarks
     *  <br>Examples: <code>2016</code>, <code>2017</code>.
     *
     */
    season: string;
}
export declare class LineCombinationsBySeasonResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
    rawResponse?: AxiosResponse;
    teamLines?: shared.TeamLine[];
}
