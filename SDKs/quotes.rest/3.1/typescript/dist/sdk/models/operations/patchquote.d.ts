import { SpeakeasyBase } from "../../../internal/utils";
import { AxiosResponse } from "axios";
export declare class PatchQuoteSecurity extends SpeakeasyBase {
    xTheySaidSoApiSecret: string;
}
export declare class PatchQuoteRequest extends SpeakeasyBase {
    /**
     * Quote Author
     */
    author?: string;
    /**
     * Quote ID
     */
    id: string;
    /**
     * Language. If not supplied an auto detection mechanism will be used to detect a language.
     */
    language?: string;
    /**
     * Quote
     */
    quote?: string;
    /**
     * Comma Separated tags
     */
    tags?: string;
}
export declare class PatchQuoteResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
    rawResponse?: AxiosResponse;
}
