import { SpeakeasyBase } from "../../../internal/utils";
import { AxiosResponse } from "axios";
export declare class DeleteQuoteImageBackgroundSecurity extends SpeakeasyBase {
    xTheySaidSoApiSecret: string;
}
export declare class DeleteQuoteImageBackgroundRequest extends SpeakeasyBase {
    /**
     * Font ID
     */
    id: string;
}
export declare class DeleteQuoteImageBackgroundResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
    rawResponse?: AxiosResponse;
}
