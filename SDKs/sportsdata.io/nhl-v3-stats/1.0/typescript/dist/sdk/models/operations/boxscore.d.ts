import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
/**
 * Desired response format. Valid entries are <code>XML</code> or <code>JSON</code>.
 */
export declare enum BoxScoreFormatEnum {
    Xml = "XML",
    Json = "JSON"
}
export declare class BoxScoreRequest extends SpeakeasyBase {
    /**
     * Desired response format. Valid entries are <code>XML</code> or <code>JSON</code>.
     */
    format: BoxScoreFormatEnum;
    /**
     * The GameID of an NHL game.  GameIDs can be found in the Games API.  Valid entries are <code>14620</code> or <code>16905</code>
     */
    gameid: string;
}
export declare class BoxScoreResponse extends SpeakeasyBase {
    boxScore?: shared.BoxScore;
    contentType: string;
    statusCode: number;
    rawResponse?: AxiosResponse;
}
