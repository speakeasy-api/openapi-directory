import { SpeakeasyBase } from "../../../internal/utils";
import { AxiosResponse } from "axios";
export declare class PutQuoteLikeSecurity extends SpeakeasyBase {
    xTheySaidSoApiSecret: string;
}
export declare class PutQuoteLikeRequest extends SpeakeasyBase {
    /**
     * Quote ID
     */
    quoteId: string;
}
export declare class PutQuoteLikeResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
    rawResponse?: AxiosResponse;
}
