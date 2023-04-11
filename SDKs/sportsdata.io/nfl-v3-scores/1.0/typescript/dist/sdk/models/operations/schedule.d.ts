import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
/**
 * Desired response format. Valid entries are <code>XML</code> or <code>JSON</code>.
 */
export declare enum ScheduleFormatEnum {
    Xml = "XML",
    Json = "JSON"
}
export declare class ScheduleRequest extends SpeakeasyBase {
    /**
     * Desired response format. Valid entries are <code>XML</code> or <code>JSON</code>.
     */
    format: ScheduleFormatEnum;
    /**
     * Year of the season (with optional season type).<br>Examples: <code>2018</code>, <code>2018PRE</code>, <code>2018POST</code>, <code>2018STAR</code>, <code>2019</code>, etc.
     */
    season: string;
}
export declare class ScheduleResponse extends SpeakeasyBase {
    contentType: string;
    schedules?: shared.Schedule[];
    statusCode: number;
    rawResponse?: AxiosResponse;
}
