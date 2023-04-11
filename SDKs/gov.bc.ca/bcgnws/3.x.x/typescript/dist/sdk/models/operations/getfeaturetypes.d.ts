import { SpeakeasyBase } from "../../../internal/utils";
import { AxiosResponse } from "axios";
/**
 * The format of the output.
 */
export declare enum GetFeatureTypesOutputFormatEnum {
    Json = "json",
    Xml = "xml"
}
export declare class GetFeatureTypesRequest extends SpeakeasyBase {
    /**
     * The format of the output.
     */
    outputFormat: GetFeatureTypesOutputFormatEnum;
}
export declare class GetFeatureTypesResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
    rawResponse?: AxiosResponse;
}
