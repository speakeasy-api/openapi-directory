import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
/**
 * Desired response format. Valid entries are <code>XML</code> or <code>JSON</code>.
 */
export declare enum PlayerDetailsByRookieDraftYearFormatEnum {
    Xml = "XML",
    Json = "JSON"
}
export declare class PlayerDetailsByRookieDraftYearRequest extends SpeakeasyBase {
    /**
     * Desired response format. Valid entries are <code>XML</code> or <code>JSON</code>.
     */
    format: PlayerDetailsByRookieDraftYearFormatEnum;
    /**
     * Year of the season.<br>Examples: <code>2018</code>, <code>2019</code>, etc.
     */
    season: string;
}
export declare class PlayerDetailsByRookieDraftYearResponse extends SpeakeasyBase {
    contentType: string;
    players?: shared.Player[];
    statusCode: number;
    rawResponse?: AxiosResponse;
}
