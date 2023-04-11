import { SpeakeasyBase } from "../../../internal/utils";
import { AxiosResponse } from "axios";
/**
 * The format of the response
 */
export declare enum GetJurisdictiongeographyFormatEnum {
    Json = "json",
    Xml = "xml"
}
export declare class GetJurisdictiongeographyRequest extends SpeakeasyBase {
    /**
     * The format of the response
     */
    format?: GetJurisdictiongeographyFormatEnum;
}
export declare class GetJurisdictiongeographyResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
    rawResponse?: AxiosResponse;
}
