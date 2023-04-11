import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
/**
 * Desired response format. Valid entries are <code>XML</code> or <code>JSON</code>.
 */
export declare enum BoxScoreFormatEnum {
    Xml = "xml",
    Json = "json"
}
export declare class BoxScoreRequest extends SpeakeasyBase {
    /**
     * Desired response format. Valid entries are <code>XML</code> or <code>JSON</code>.
     */
    format: BoxScoreFormatEnum;
    /**
     * Unique FantasyData Game ID.
     *
     * @remarks
     * Example:<code>100002649</code>.
     */
    gameid: string;
}
export declare class BoxScoreResponse extends SpeakeasyBase {
    boxScores?: shared.BoxScore[];
    contentType: string;
    statusCode: number;
    rawResponse?: AxiosResponse;
}
