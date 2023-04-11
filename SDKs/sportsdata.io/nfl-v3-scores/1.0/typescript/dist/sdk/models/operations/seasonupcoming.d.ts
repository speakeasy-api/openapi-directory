import { SpeakeasyBase } from "../../../internal/utils";
import { AxiosResponse } from "axios";
/**
 * Desired response format. Valid entries are <code>XML</code> or <code>JSON</code>.
 */
export declare enum SeasonUpcomingFormatEnum {
    Xml = "XML",
    Json = "JSON"
}
export declare class SeasonUpcomingRequest extends SpeakeasyBase {
    /**
     * Desired response format. Valid entries are <code>XML</code> or <code>JSON</code>.
     */
    format: SeasonUpcomingFormatEnum;
}
export declare class SeasonUpcomingResponse extends SpeakeasyBase {
    contentType: string;
    seasonUpcoming200ApplicationJSONInteger?: number;
    statusCode: number;
    rawResponse?: AxiosResponse;
}
