import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
/**
 * Desired response format. Valid entries are <code>XML</code> or <code>JSON</code>.
 */
export declare enum RacesScheduleFormatEnum {
    Xml = "xml",
    Json = "json"
}
export declare class RacesScheduleRequest extends SpeakeasyBase {
    /**
     * Desired response format. Valid entries are <code>XML</code> or <code>JSON</code>.
     */
    format: RacesScheduleFormatEnum;
    /**
     * Year of the season.
     *
     * @remarks
     * <br>Examples: <code>2015</code>, <code>2016</code>.
     */
    season: string;
}
export declare class RacesScheduleResponse extends SpeakeasyBase {
    contentType: string;
    races?: shared.Race[];
    statusCode: number;
    rawResponse?: AxiosResponse;
}
