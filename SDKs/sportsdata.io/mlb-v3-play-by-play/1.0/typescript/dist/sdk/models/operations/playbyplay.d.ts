import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
/**
 * Desired response format. Valid entries are <code>XML</code> or <code>JSON</code>.
 */
export declare enum PlayByPlayFormatEnum {
    Xml = "XML",
    Json = "JSON"
}
export declare class PlayByPlayRequest extends SpeakeasyBase {
    /**
     * Desired response format. Valid entries are <code>XML</code> or <code>JSON</code>.
     */
    format: PlayByPlayFormatEnum;
    /**
     * The GameID of an MLB game.  GameIDs can be found in the Games API.  Valid entries are <code>14620</code> or <code>16905</code>
     */
    gameid: string;
}
export declare class PlayByPlayResponse extends SpeakeasyBase {
    contentType: string;
    playByPlay?: shared.PlayByPlay;
    statusCode: number;
    rawResponse?: AxiosResponse;
}
