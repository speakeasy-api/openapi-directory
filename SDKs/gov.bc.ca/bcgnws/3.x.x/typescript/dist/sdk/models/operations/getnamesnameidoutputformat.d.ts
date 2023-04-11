import { SpeakeasyBase } from "../../../internal/utils";
import { AxiosResponse } from "axios";
/**
 * The format of the output.
 */
export declare enum GetNamesNameIdOutputFormatOutputFormatEnum {
    Json = "json",
    Xml = "xml",
    Kml = "kml",
    Csv = "csv",
    Html = "html"
}
export declare class GetNamesNameIdOutputFormatRequest extends SpeakeasyBase {
    /**
     * The unique identifier for a name
     */
    nameId: number;
    /**
     * The format of the output.
     */
    outputFormat: GetNamesNameIdOutputFormatOutputFormatEnum;
}
export declare class GetNamesNameIdOutputFormatResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
    rawResponse?: AxiosResponse;
}
