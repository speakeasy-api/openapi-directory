import { SpeakeasyBase } from "../../../internal/utils";
import { AxiosResponse } from "axios";
/**
 * Desired response format. Valid entries are <code>XML</code> or <code>JSON</code>.
 */
export declare enum WeekCurrentFormatEnum {
    Xml = "XML",
    Json = "JSON"
}
export declare class WeekCurrentRequest extends SpeakeasyBase {
    /**
     * Desired response format. Valid entries are <code>XML</code> or <code>JSON</code>.
     */
    format: WeekCurrentFormatEnum;
}
export declare class WeekCurrentResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
    rawResponse?: AxiosResponse;
    weekCurrent200ApplicationJSONInteger?: number;
}
