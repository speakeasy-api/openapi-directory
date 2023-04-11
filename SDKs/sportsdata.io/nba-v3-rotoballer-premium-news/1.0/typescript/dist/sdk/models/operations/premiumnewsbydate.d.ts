import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
/**
 * Desired response format. Valid entries are <code>XML</code> or <code>JSON</code>.
 */
export declare enum PremiumNewsByDateFormatEnum {
    Xml = "xml",
    Json = "json"
}
export declare class PremiumNewsByDateRequest extends SpeakeasyBase {
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
    format: PremiumNewsByDateFormatEnum;
}
export declare class PremiumNewsByDateResponse extends SpeakeasyBase {
    contentType: string;
    news?: shared.News[];
    statusCode: number;
    rawResponse?: AxiosResponse;
}
