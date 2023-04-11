import { SpeakeasyBase } from "../../../internal/utils";
import { AxiosResponse } from "axios";
export declare class PostQuoteSecurity extends SpeakeasyBase {
    xTheySaidSoApiSecret: string;
}
export declare class PostQuoteRequest extends SpeakeasyBase {
    /**
     * Quote Author
     */
    author?: string;
    /**
     * Language. If not supplied an auto detection mechanism will be used to detect a language.
     */
    language?: string;
    /**
     * Quote
     */
    quote: string;
    /**
     * Comma Separated tags
     */
    tags?: string;
}
export declare class PostQuoteResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
    rawResponse?: AxiosResponse;
}
