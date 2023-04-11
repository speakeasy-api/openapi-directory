import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
/**
 * Desired response format. Valid entries are <code>xml</code> or <code>json</code>.
 */
export declare enum SchedulesFormatEnum {
    Xml = "XML",
    Json = "JSON"
}
export declare class SchedulesRequest extends SpeakeasyBase {
    /**
     * Desired response format. Valid entries are <code>xml</code> or <code>json</code>.
     */
    format: SchedulesFormatEnum;
    /**
     * Year of the season (with optional season type).<br>Examples: <code>2018</code>, <code>2018PRE</code>, <code>2018POST</code>, <code>2018STAR</code>, <code>2019</code>, etc.
     */
    season: string;
}
export declare class SchedulesResponse extends SpeakeasyBase {
    contentType: string;
    games?: shared.Game[];
    statusCode: number;
    rawResponse?: AxiosResponse;
}
