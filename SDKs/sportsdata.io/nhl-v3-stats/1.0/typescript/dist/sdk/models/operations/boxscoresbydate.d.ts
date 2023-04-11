import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
/**
 * Desired response format. Valid entries are <code>XML</code> or <code>JSON</code>.
 */
export declare enum BoxScoresByDateFormatEnum {
    Xml = "XML",
    Json = "JSON"
}
export declare class BoxScoresByDateRequest extends SpeakeasyBase {
    /**
     * The date of the game(s).
     *
     * @remarks
     *  <br>Examples: <code>2017-OCT-31</code>, <code>2018-FEB-15</code>.
     *
     */
    date: string;
    /**
     * Desired response format. Valid entries are <code>XML</code> or <code>JSON</code>.
     */
    format: BoxScoresByDateFormatEnum;
}
export declare class BoxScoresByDateResponse extends SpeakeasyBase {
    boxScores?: shared.BoxScore[];
    contentType: string;
    statusCode: number;
    rawResponse?: AxiosResponse;
}
