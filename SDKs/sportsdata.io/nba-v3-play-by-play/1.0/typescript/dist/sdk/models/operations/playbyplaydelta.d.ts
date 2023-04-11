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
     * The date of the game(s).
     *
     * @remarks
     * <br>Examples: <code>2016-OCT-31</code>, <code>2017-JAN-15</code>.
     */
    date: string;
    /**
     * Desired response format. Valid entries are <code>XML</code> or <code>JSON</code>.
     */
    format: PlayByPlayDeltaFormatEnum;
    /**
     * Only returns plays that have changed in the last X minutes.  You specify how many minutes in time to go back.  Valid entries are:
     *
     * @remarks
     * <code>1</code>, <code>2</code> ... <code>all</code>.
     */
    minutes: string;
}
export declare class PlayByPlayDeltaResponse extends SpeakeasyBase {
    contentType: string;
    playByPlays?: shared.PlayByPlay[];
    statusCode: number;
    rawResponse?: AxiosResponse;
}
