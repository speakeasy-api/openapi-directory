import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
/**
 * Desired response format. Valid entries are <code>XML</code> or <code>JSON</code>.
 */
export declare enum LegacyBoxScoreFormatEnum {
    Xml = "XML",
    Json = "JSON"
}
export declare class LegacyBoxScoreRequest extends SpeakeasyBase {
    /**
     * Desired response format. Valid entries are <code>XML</code> or <code>JSON</code>.
     */
    format: LegacyBoxScoreFormatEnum;
    /**
     * Abbreviation of the home team. Example: <code>WAS</code>.
     */
    hometeam: string;
    /**
     *
     * @remarks
     *           Year of the season and the season type. If no season type is provided, then the default is regular season.
     *           <br>Examples: <code>2015REG</code>, <code>2015PRE</code>, <code>2015POST</code>.
     *
     */
    season: string;
    /**
     *
     * @remarks
     *           Week of the season. Valid values are as follows: Preseason 0 to 4, Regular Season 1 to 17, Postseason 1 to 4.
     *           Example: <code>1</code>
     *
     */
    week: string;
}
export declare class LegacyBoxScoreResponse extends SpeakeasyBase {
    boxScore?: shared.BoxScore;
    contentType: string;
    statusCode: number;
    rawResponse?: AxiosResponse;
}
