import { SpeakeasyBase } from "../../../internal/utils";
import { AxiosResponse } from "axios";
/**
 * The format of the response
 */
export declare enum GetJurisdictionFormatEnum {
    Json = "json",
    Xml = "xml"
}
export declare class GetJurisdictionRequest extends SpeakeasyBase {
    /**
     * The format of the response
     */
    format?: GetJurisdictionFormatEnum;
}
export declare class GetJurisdictionResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
    rawResponse?: AxiosResponse;
}
