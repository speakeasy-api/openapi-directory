import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
/**
 * Desired response format. Valid entries are <code>XML</code> or <code>JSON</code>.
 */
export declare enum BoxScoreByScoreidVFormatEnum {
    Xml = "XML",
    Json = "JSON"
}
export declare class BoxScoreByScoreidVRequest extends SpeakeasyBase {
    /**
     * Desired response format. Valid entries are <code>XML</code> or <code>JSON</code>.
     */
    format: BoxScoreByScoreidVFormatEnum;
    /**
     * The ScoreID of the game. Possible values include: <code>16247</code>, <code>16245</code>, etc.
     */
    scoreid: string;
}
export declare class BoxScoreByScoreidVResponse extends SpeakeasyBase {
    boxScoreV3?: shared.BoxScoreV3;
    contentType: string;
    statusCode: number;
    rawResponse?: AxiosResponse;
}
