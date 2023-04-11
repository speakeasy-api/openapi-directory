import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
/**
 * Desired response format. Valid entries are <code>XML</code> or <code>JSON</code>.
 */
export declare enum DailyFantasyScoringFormatEnum {
    Xml = "XML",
    Json = "JSON"
}
export declare class DailyFantasyScoringRequest extends SpeakeasyBase {
    /**
     * The date of the contest for which you're pulling players
     *
     * @remarks
     *           <code>2014-SEP-21</code>,
     *           <code>2014-NOV-15</code>, etc
     */
    date: string;
    /**
     * Desired response format. Valid entries are <code>XML</code> or <code>JSON</code>.
     */
    format: DailyFantasyScoringFormatEnum;
}
export declare class DailyFantasyScoringResponse extends SpeakeasyBase {
    contentType: string;
    dailyFantasyScorings?: shared.DailyFantasyScoring[];
    statusCode: number;
    rawResponse?: AxiosResponse;
}
