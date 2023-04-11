import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
/**
 * Desired response format. Valid entries are <code>XML</code> or <code>JSON</code>.
 */
export declare enum InjuriesFormatEnum {
    Xml = "XML",
    Json = "JSON"
}
export declare class InjuriesRequest extends SpeakeasyBase {
    /**
     * Desired response format. Valid entries are <code>XML</code> or <code>JSON</code>.
     */
    format: InjuriesFormatEnum;
}
export declare class InjuriesResponse extends SpeakeasyBase {
    contentType: string;
    injuries?: shared.Injury[];
    statusCode: number;
    rawResponse?: AxiosResponse;
}
