import { SpeakeasyBase } from "../../../internal/utils";
import { AxiosResponse } from "axios";
/**
 * Desired response format. Valid entries are <code>XML</code> or <code>JSON</code>.
 */
export declare enum SeasonLastCompletedFormatEnum {
    Xml = "XML",
    Json = "JSON"
}
export declare class SeasonLastCompletedRequest extends SpeakeasyBase {
    /**
     * Desired response format. Valid entries are <code>XML</code> or <code>JSON</code>.
     */
    format: SeasonLastCompletedFormatEnum;
}
export declare class SeasonLastCompletedResponse extends SpeakeasyBase {
    contentType: string;
    seasonLastCompleted200ApplicationJSONInteger?: number;
    statusCode: number;
    rawResponse?: AxiosResponse;
}
