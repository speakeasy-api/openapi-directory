import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
/**
 * Desired response format. Valid entries are <code>XML</code> or <code>JSON</code>.
 */
export declare enum TimeframesFormatEnum {
    Xml = "XML",
    Json = "JSON"
}
/**
 * The type of timeframes to return.  Valid entries are <code>current</code> or <code>upcoming</code> or <code>completed</code> or <code>recent</code> or <code>all</code>.
 */
export declare enum TimeframesTypeEnum {
    Current = "current",
    Upcoming = "upcoming",
    Completed = "completed",
    Recent = "recent",
    All = "all"
}
export declare class TimeframesRequest extends SpeakeasyBase {
    /**
     * Desired response format. Valid entries are <code>XML</code> or <code>JSON</code>.
     */
    format: TimeframesFormatEnum;
    /**
     * The type of timeframes to return.  Valid entries are <code>current</code> or <code>upcoming</code> or <code>completed</code> or <code>recent</code> or <code>all</code>.
     */
    type: TimeframesTypeEnum;
}
export declare class TimeframesResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
    rawResponse?: AxiosResponse;
    timeframes?: shared.Timeframe[];
}
