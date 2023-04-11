import { SpeakeasyBase } from "../../../internal/utils";
import { AxiosResponse } from "axios";
/**
 * The format of the response
 */
export declare enum GetAreasFormatEnum {
    Json = "json",
    Xml = "xml"
}
export declare class GetAreasRequest extends SpeakeasyBase {
    /**
     * The format of the response
     */
    format?: GetAreasFormatEnum;
}
export declare class GetAreasResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
    rawResponse?: AxiosResponse;
}
