import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
/**
 * Desired response format. Valid entries are <code>XML</code> or <code>JSON</code>.
 */
export declare enum RotoballerArticlesByDateFormatEnum {
    Xml = "xml",
    Json = "json"
}
export declare class RotoballerArticlesByDateRequest extends SpeakeasyBase {
    /**
     * The date of the news.
     *
     * @remarks
     * <br>Examples: <code>2017-JUL-31</code>, <code>2017-SEP-01</code>.
     */
    date: string;
    /**
     * Desired response format. Valid entries are <code>XML</code> or <code>JSON</code>.
     */
    format: RotoballerArticlesByDateFormatEnum;
}
export declare class RotoballerArticlesByDateResponse extends SpeakeasyBase {
    articles?: shared.Article[];
    contentType: string;
    statusCode: number;
    rawResponse?: AxiosResponse;
}
