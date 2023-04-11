import { SpeakeasyBase } from "../../../internal/utils";
import { AxiosResponse } from "axios";
/**
 * Desired response format. Valid entries are <code>xml</code> or <code>json</code>.
 */
export declare enum CurrentWeekFormatEnum {
    Xml = "XML",
    Json = "JSON"
}
export declare class CurrentWeekRequest extends SpeakeasyBase {
    /**
     * Desired response format. Valid entries are <code>xml</code> or <code>json</code>.
     */
    format: CurrentWeekFormatEnum;
}
export declare class CurrentWeekResponse extends SpeakeasyBase {
    contentType: string;
    currentWeek200ApplicationJSONInteger?: number;
    statusCode: number;
    rawResponse?: AxiosResponse;
}
