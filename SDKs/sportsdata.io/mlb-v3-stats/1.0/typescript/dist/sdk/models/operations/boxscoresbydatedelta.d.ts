import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
/**
 * Desired response format. Valid entries are <code>XML</code> or <code>JSON</code>.
 */
export declare enum BoxScoresByDateDeltaFormatEnum {
    Xml = "XML",
    Json = "JSON"
}
export declare class BoxScoresByDateDeltaRequest extends SpeakeasyBase {
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
    format: BoxScoresByDateDeltaFormatEnum;
    /**
     * Only returns player statistics that have changed in the last X minutes.  You specify how many minutes in time to go back. Valid entries are:
     *
     * @remarks
     * <code>1</code>, <code>2</code> ... <code>all</code>.
     */
    minutes: string;
}
export declare class BoxScoresByDateDeltaResponse extends SpeakeasyBase {
    boxScores?: shared.BoxScore[];
    contentType: string;
    statusCode: number;
    rawResponse?: AxiosResponse;
}
