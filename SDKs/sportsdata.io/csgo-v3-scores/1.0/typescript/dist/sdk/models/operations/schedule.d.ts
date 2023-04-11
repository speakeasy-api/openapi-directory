import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
/**
 * Desired response format. Valid entries are <code>XML</code> or <code>JSON</code>.
 */
export declare enum ScheduleFormatEnum {
    Xml = "xml",
    Json = "json"
}
export declare class ScheduleRequest extends SpeakeasyBase {
    /**
     * Desired response format. Valid entries are <code>XML</code> or <code>JSON</code>.
     */
    format: ScheduleFormatEnum;
    /**
     * Unique FantasyData Round ID. RoundIDs can be found in the Competitions and Competition Details endpoints.
     *
     * @remarks
     * Examples: <code>100000138</code>, <code>1000001412</code>, etc
     */
    roundid: string;
}
export declare class ScheduleResponse extends SpeakeasyBase {
    contentType: string;
    games?: shared.Game[];
    statusCode: number;
    rawResponse?: AxiosResponse;
}
