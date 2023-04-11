import { SpeakeasyBase } from "../../../internal/utils";
import { AxiosResponse } from "axios";
/**
 * Desired response format. Valid entries are <code>XML</code> or <code>JSON</code>.
 */
export declare enum WeekUpcomingFormatEnum {
    Xml = "XML",
    Json = "JSON"
}
export declare class WeekUpcomingRequest extends SpeakeasyBase {
    /**
     * Desired response format. Valid entries are <code>XML</code> or <code>JSON</code>.
     */
    format: WeekUpcomingFormatEnum;
}
export declare class WeekUpcomingResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
    rawResponse?: AxiosResponse;
    weekUpcoming200ApplicationJSONInteger?: number;
}
