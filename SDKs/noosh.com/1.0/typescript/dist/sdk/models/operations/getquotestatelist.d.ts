import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
export declare class GetQuoteStateListRequest extends SpeakeasyBase {
    workgroupId: string;
}
export declare class GetQuoteStateListResponse extends SpeakeasyBase {
    body?: Uint8Array;
    contentType: string;
    /**
     * There are not any result matching your search condition
     */
    httpStatusVO?: shared.HTTPStatusVO;
    /**
     * Successful retrieval
     */
    objectStateListVO?: shared.ObjectStateListVO;
    statusCode: number;
    rawResponse?: AxiosResponse;
}
