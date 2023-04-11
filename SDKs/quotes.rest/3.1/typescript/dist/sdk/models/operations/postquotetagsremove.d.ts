import { SpeakeasyBase } from "../../../internal/utils";
import { AxiosResponse } from "axios";
export declare class PostQuoteTagsRemoveSecurity extends SpeakeasyBase {
    xTheySaidSoApiSecret: string;
}
export declare class PostQuoteTagsRemoveRequest extends SpeakeasyBase {
    /**
     * Quote ID
     */
    id: string;
    /**
     * Comma Separated tags
     */
    tags: string;
}
export declare class PostQuoteTagsRemoveResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
    rawResponse?: AxiosResponse;
}
