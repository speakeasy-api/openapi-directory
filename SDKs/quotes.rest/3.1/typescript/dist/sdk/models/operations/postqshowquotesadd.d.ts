import { SpeakeasyBase } from "../../../internal/utils";
import { AxiosResponse } from "axios";
export declare class PostQshowQuotesAddSecurity extends SpeakeasyBase {
    xTheySaidSoApiSecret: string;
}
export declare class PostQshowQuotesAddRequest extends SpeakeasyBase {
    /**
     * Qshow ID
     */
    id: string;
    /**
     * Quote ID to add the qshow collection
     */
    quoteid: string;
}
export declare class PostQshowQuotesAddResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
    rawResponse?: AxiosResponse;
}
