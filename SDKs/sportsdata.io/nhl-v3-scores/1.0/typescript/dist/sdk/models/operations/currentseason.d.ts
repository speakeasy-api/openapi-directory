import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
/**
 * Desired response format. Valid entries are <code>XML</code> or <code>JSON</code>.
 */
export declare enum CurrentSeasonFormatEnum {
    Xml = "XML",
    Json = "JSON"
}
export declare class CurrentSeasonRequest extends SpeakeasyBase {
    /**
     * Desired response format. Valid entries are <code>XML</code> or <code>JSON</code>.
     */
    format: CurrentSeasonFormatEnum;
}
export declare class CurrentSeasonResponse extends SpeakeasyBase {
    contentType: string;
    season?: shared.Season;
    statusCode: number;
    rawResponse?: AxiosResponse;
}
