import { SpeakeasyBase } from "../../../internal/utils";
import { AxiosResponse } from "axios";
export declare class PostQuoteLikeSecurity extends SpeakeasyBase {
    xTheySaidSoApiSecret: string;
}
export declare class PostQuoteLikeRequest extends SpeakeasyBase {
    /**
     * Quote ID
     */
    quoteId: string;
}
export declare class PostQuoteLikeResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
    rawResponse?: AxiosResponse;
}
