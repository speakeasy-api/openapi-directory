import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
export declare class GetQuoteRequest extends SpeakeasyBase {
    projectId: string;
    quoteId: string;
    workgroupId: string;
}
export declare class GetQuoteResponse extends SpeakeasyBase {
    body?: Uint8Array;
    contentType: string;
    /**
     * There are not any result matching your search condition
     */
    httpStatusVO?: shared.HTTPStatusVO;
    /**
     * Successful retrieval
     */
    quoteExpandVO?: shared.QuoteExpandVO;
    statusCode: number;
    rawResponse?: AxiosResponse;
}
