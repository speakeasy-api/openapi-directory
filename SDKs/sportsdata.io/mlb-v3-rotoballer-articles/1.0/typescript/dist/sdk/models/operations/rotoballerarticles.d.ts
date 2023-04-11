import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
/**
 * Desired response format. Valid entries are <code>XML</code> or <code>JSON</code>.
 */
export declare enum RotoballerArticlesFormatEnum {
    Xml = "xml",
    Json = "json"
}
export declare class RotoballerArticlesRequest extends SpeakeasyBase {
    /**
     * Desired response format. Valid entries are <code>XML</code> or <code>JSON</code>.
     */
    format: RotoballerArticlesFormatEnum;
}
export declare class RotoballerArticlesResponse extends SpeakeasyBase {
    articles?: shared.Article[];
    contentType: string;
    statusCode: number;
    rawResponse?: AxiosResponse;
}
