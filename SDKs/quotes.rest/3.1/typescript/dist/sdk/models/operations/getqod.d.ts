import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
export declare class GetQodSecurity extends SpeakeasyBase {
    xTheySaidSoApiSecret: string;
}
export declare class GetQodRequest extends SpeakeasyBase {
    /**
     * QOD Category
     */
    category?: string;
    /**
     * Language of the QOD. The language must be supported in our QOD system.
     */
    language?: string;
}
export declare class GetQodResponse extends SpeakeasyBase {
    contentType: string;
    /**
     * 200  response
     */
    quoteResponse?: shared.QuoteResponse;
    statusCode: number;
    rawResponse?: AxiosResponse;
}
