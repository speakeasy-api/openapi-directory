import { SpeakeasyBase } from "../../../internal/utils";
import { AxiosResponse } from "axios";
/**
 * Desired response format. Valid entries are <code>xml</code> or <code>json</code>.
 */
export declare enum CurrentSeasonFormatEnum {
    Xml = "XML",
    Json = "JSON"
}
export declare class CurrentSeasonRequest extends SpeakeasyBase {
    /**
     * Desired response format. Valid entries are <code>xml</code> or <code>json</code>.
     */
    format: CurrentSeasonFormatEnum;
}
export declare class CurrentSeasonResponse extends SpeakeasyBase {
    contentType: string;
    currentSeason200ApplicationJSONInteger?: number;
    statusCode: number;
    rawResponse?: AxiosResponse;
}
