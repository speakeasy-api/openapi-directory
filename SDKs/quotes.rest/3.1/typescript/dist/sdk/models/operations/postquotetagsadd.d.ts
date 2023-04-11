import { SpeakeasyBase } from "../../../internal/utils";
import { AxiosResponse } from "axios";
export declare class PostQuoteTagsAddSecurity extends SpeakeasyBase {
    xTheySaidSoApiSecret: string;
}
export declare class PostQuoteTagsAddRequest extends SpeakeasyBase {
    /**
     * Quote ID
     */
    id: string;
    /**
     * Comma Separated tags
     */
    tags: string;
}
export declare class PostQuoteTagsAddResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
    rawResponse?: AxiosResponse;
}
