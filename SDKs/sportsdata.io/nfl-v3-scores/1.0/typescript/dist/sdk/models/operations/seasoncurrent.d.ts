import { SpeakeasyBase } from "../../../internal/utils";
import { AxiosResponse } from "axios";
/**
 * Desired response format. Valid entries are <code>XML</code> or <code>JSON</code>.
 */
export declare enum SeasonCurrentFormatEnum {
    Xml = "XML",
    Json = "JSON"
}
export declare class SeasonCurrentRequest extends SpeakeasyBase {
    /**
     * Desired response format. Valid entries are <code>XML</code> or <code>JSON</code>.
     */
    format: SeasonCurrentFormatEnum;
}
export declare class SeasonCurrentResponse extends SpeakeasyBase {
    contentType: string;
    seasonCurrent200ApplicationJSONInteger?: number;
    statusCode: number;
    rawResponse?: AxiosResponse;
}
