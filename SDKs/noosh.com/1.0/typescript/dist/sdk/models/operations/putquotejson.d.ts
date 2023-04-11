import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
export declare class PutQuoteJsonRequest extends SpeakeasyBase {
    quotePutPersistVO?: shared.QuotePutPersistVO;
    projectId: string;
    quoteId: string;
    workgroupId: string;
}
export declare class PutQuoteJsonResponse extends SpeakeasyBase {
    body?: Uint8Array;
    contentType: string;
    /**
     * Successful updated
     */
    httpStatusVO?: shared.HTTPStatusVO;
    statusCode: number;
    rawResponse?: AxiosResponse;
}
