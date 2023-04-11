import { SpeakeasyBase } from "../../../internal/utils";
import { AxiosResponse } from "axios";
export declare class PostQshowQuotesRemoveSecurity extends SpeakeasyBase {
    xTheySaidSoApiSecret: string;
}
export declare class PostQshowQuotesRemoveRequest extends SpeakeasyBase {
    /**
     * Qshow ID
     */
    id: string;
    /**
     * Quote ID to remove from the qshow collection
     */
    quoteid: string;
}
export declare class PostQshowQuotesRemoveResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
    rawResponse?: AxiosResponse;
}
