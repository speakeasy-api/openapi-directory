import { SpeakeasyBase } from "../../../internal/utils";
import { AxiosResponse } from "axios";
export declare class GetQshowQuotesSecurity extends SpeakeasyBase {
    xTheySaidSoApiSecret: string;
}
export declare class GetQshowQuotesRequest extends SpeakeasyBase {
    /**
     * Qshow ID
     */
    id: string;
}
export declare class GetQshowQuotesResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
    rawResponse?: AxiosResponse;
}
