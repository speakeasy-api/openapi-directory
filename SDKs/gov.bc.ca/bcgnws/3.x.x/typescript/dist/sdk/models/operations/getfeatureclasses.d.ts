import { SpeakeasyBase } from "../../../internal/utils";
import { AxiosResponse } from "axios";
/**
 * The format of the output.
 */
export declare enum GetFeatureClassesOutputFormatEnum {
    Json = "json",
    Xml = "xml"
}
export declare class GetFeatureClassesRequest extends SpeakeasyBase {
    /**
     * The format of the output.
     */
    outputFormat: GetFeatureClassesOutputFormatEnum;
}
export declare class GetFeatureClassesResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
    rawResponse?: AxiosResponse;
}
