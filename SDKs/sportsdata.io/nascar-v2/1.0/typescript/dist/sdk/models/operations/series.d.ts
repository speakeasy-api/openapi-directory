import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
/**
 * Desired response format. Valid entries are <code>XML</code> or <code>JSON</code>.
 */
export declare enum SeriesFormatEnum {
    Xml = "xml",
    Json = "json"
}
export declare class SeriesRequest extends SpeakeasyBase {
    /**
     * Desired response format. Valid entries are <code>XML</code> or <code>JSON</code>.
     */
    format: SeriesFormatEnum;
}
export declare class SeriesResponse extends SpeakeasyBase {
    contentType: string;
    series?: shared.Series[];
    statusCode: number;
    rawResponse?: AxiosResponse;
}
