import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
export declare class PutQuoteRawRequest extends SpeakeasyBase {
    requestBody?: Uint8Array;
    projectId: string;
    quoteId: string;
    workgroupId: string;
}
export declare class PutQuoteRawResponse extends SpeakeasyBase {
    body?: Uint8Array;
    contentType: string;
    /**
     * Successful updated
     */
    httpStatusVO?: shared.HTTPStatusVO;
    statusCode: number;
    rawResponse?: AxiosResponse;
}
