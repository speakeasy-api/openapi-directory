import { SpeakeasyBase } from "../../../internal/utils";
import { AxiosResponse } from "axios";
/**
 * The format of the output.
 */
export declare enum GetFeatureCategoriesOutputFormatEnum {
    Json = "json",
    Xml = "xml"
}
export declare class GetFeatureCategoriesRequest extends SpeakeasyBase {
    /**
     * The format of the output.
     */
    outputFormat: GetFeatureCategoriesOutputFormatEnum;
}
export declare class GetFeatureCategoriesResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
    rawResponse?: AxiosResponse;
}
