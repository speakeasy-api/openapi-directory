import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
/**
 * Desired response format. Valid entries are <code>XML</code> or <code>JSON</code>.
 */
export declare enum BoxScoresByDateFormatEnum {
    Xml = "xml",
    Json = "json"
}
export declare class BoxScoresByDateRequest extends SpeakeasyBase {
    /**
     * The date of the game(s).
     *
     * @remarks
     * <br>Examples: <code>2019-01-20</code>
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
