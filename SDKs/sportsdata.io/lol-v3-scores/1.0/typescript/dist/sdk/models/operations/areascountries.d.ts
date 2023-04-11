import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
/**
 * Desired response format. Valid entries are <code>XML</code> or <code>JSON</code>.
 */
export declare enum AreasCountriesFormatEnum {
    Xml = "xml",
    Json = "json"
}
export declare class AreasCountriesRequest extends SpeakeasyBase {
    /**
     * Desired response format. Valid entries are <code>XML</code> or <code>JSON</code>.
     */
    format: AreasCountriesFormatEnum;
}
export declare class AreasCountriesResponse extends SpeakeasyBase {
    areas?: shared.Area[];
    contentType: string;
    statusCode: number;
    rawResponse?: AxiosResponse;
}
