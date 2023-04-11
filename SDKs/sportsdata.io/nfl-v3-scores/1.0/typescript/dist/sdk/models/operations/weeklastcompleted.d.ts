import { SpeakeasyBase } from "../../../internal/utils";
import { AxiosResponse } from "axios";
/**
 * Desired response format. Valid entries are <code>XML</code> or <code>JSON</code>.
 */
export declare enum WeekLastCompletedFormatEnum {
    Xml = "XML",
    Json = "JSON"
}
export declare class WeekLastCompletedRequest extends SpeakeasyBase {
    /**
     * Desired response format. Valid entries are <code>XML</code> or <code>JSON</code>.
     */
    format: WeekLastCompletedFormatEnum;
}
export declare class WeekLastCompletedResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
    rawResponse?: AxiosResponse;
    weekLastCompleted200ApplicationJSONInteger?: number;
}
