import { SpeakeasyBase } from "../../../internal/utils";
import { AxiosResponse } from "axios";
/**
 * The format of the output.
 */
export declare enum GetNameAuthoritiesOutputFormatEnum {
    Json = "json",
    Xml = "xml"
}
export declare class GetNameAuthoritiesRequest extends SpeakeasyBase {
    /**
     * The format of the output.
     */
    outputFormat: GetNameAuthoritiesOutputFormatEnum;
}
export declare class GetNameAuthoritiesResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
    rawResponse?: AxiosResponse;
}
