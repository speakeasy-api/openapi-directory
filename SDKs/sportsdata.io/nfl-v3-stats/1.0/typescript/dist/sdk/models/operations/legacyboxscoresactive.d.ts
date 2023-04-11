import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
/**
 * Desired response format. Valid entries are <code>XML</code> or <code>JSON</code>.
 */
export declare enum LegacyBoxScoresActiveFormatEnum {
    Xml = "XML",
    Json = "JSON"
}
export declare class LegacyBoxScoresActiveRequest extends SpeakeasyBase {
    /**
     * Desired response format. Valid entries are <code>XML</code> or <code>JSON</code>.
     */
    format: LegacyBoxScoresActiveFormatEnum;
}
export declare class LegacyBoxScoresActiveResponse extends SpeakeasyBase {
    boxScores?: shared.BoxScore[];
    contentType: string;
    statusCode: number;
    rawResponse?: AxiosResponse;
}
