import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
/**
 * Desired response format. Valid entries are <code>XML</code> or <code>JSON</code>.
 */
export declare enum InjuriesHistoricalFormatEnum {
    Xml = "XML",
    Json = "JSON"
}
export declare class InjuriesHistoricalRequest extends SpeakeasyBase {
    /**
     * Desired response format. Valid entries are <code>XML</code> or <code>JSON</code>.
     */
    format: InjuriesHistoricalFormatEnum;
}
export declare class InjuriesHistoricalResponse extends SpeakeasyBase {
    contentType: string;
    injuries?: shared.Injury[];
    statusCode: number;
    rawResponse?: AxiosResponse;
}
