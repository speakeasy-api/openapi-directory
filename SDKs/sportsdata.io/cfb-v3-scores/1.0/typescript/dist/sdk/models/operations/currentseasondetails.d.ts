import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
/**
 * Desired response format. Valid entries are <code>xml</code> or <code>json</code>.
 */
export declare enum CurrentSeasonDetailsFormatEnum {
    Xml = "XML",
    Json = "JSON"
}
export declare class CurrentSeasonDetailsRequest extends SpeakeasyBase {
    /**
     * Desired response format. Valid entries are <code>xml</code> or <code>json</code>.
     */
    format: CurrentSeasonDetailsFormatEnum;
}
export declare class CurrentSeasonDetailsResponse extends SpeakeasyBase {
    contentType: string;
    season?: shared.Season;
    statusCode: number;
    rawResponse?: AxiosResponse;
}
