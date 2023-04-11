import { SpeakeasyBase } from "../../../internal/utils";
import { AxiosResponse } from "axios";
/**
 * Desired response format. Valid entries are <code>xml</code> or <code>json</code>.
 */
export declare enum CurrentSeasontypeFormatEnum {
    Xml = "XML",
    Json = "JSON"
}
export declare class CurrentSeasontypeRequest extends SpeakeasyBase {
    /**
     * Desired response format. Valid entries are <code>xml</code> or <code>json</code>.
     */
    format: CurrentSeasontypeFormatEnum;
}
export declare class CurrentSeasontypeResponse extends SpeakeasyBase {
    contentType: string;
    currentSeasontype200ApplicationJSONString?: string;
    statusCode: number;
    rawResponse?: AxiosResponse;
}
