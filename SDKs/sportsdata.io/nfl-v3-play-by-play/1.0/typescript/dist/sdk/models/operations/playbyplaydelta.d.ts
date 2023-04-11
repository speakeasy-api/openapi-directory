import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
/**
 * Desired response format. Valid entries are <code>XML</code> or <code>JSON</code>.
 */
export declare enum PlayByPlayDeltaFormatEnum {
    Xml = "XML",
    Json = "JSON"
}
export declare class PlayByPlayDeltaRequest extends SpeakeasyBase {
    /**
     * Desired response format. Valid entries are <code>XML</code> or <code>JSON</code>.
     */
    format: PlayByPlayDeltaFormatEnum;
    /**
     * Only returns player statistics that have changed in the last X minutes.  You specify how many minutes in time to go back.  Valid entries are:<br>
     *
     * @remarks
     *           <code>1</code> or <code>2</code>.
     *
     */
    minutes: string;
    /**
     * Year of the season and the season type. If no season type is provided, then the default is regular season.
     *
     * @remarks
     *           <br>Examples: <code>2015REG</code>, <code>2015PRE</code>, <code>2015POST</code>.
     *
     */
    season: string;
    /**
     * Week of the season. Valid values are as follows: Preseason 0 to 4, Regular Season 1 to 17, Postseason 1 to 4.
     *
     * @remarks
     *           Example: <code>1</code>
     *
     */
    week: string;
}
export declare class PlayByPlayDeltaResponse extends SpeakeasyBase {
    contentType: string;
    playByPlays?: shared.PlayByPlay[];
    statusCode: number;
    rawResponse?: AxiosResponse;
}
