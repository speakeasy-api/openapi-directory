import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
export declare class GetQuoteListRequest extends SpeakeasyBase {
    projectId: string;
    /**
     * Quote Object State Id, use /workgroups/{workgroup_id}/quoteStates to get correct value
     */
    quoteStateIdUseFiltersEqualQuoteStateId111111?: string;
    workgroupId: string;
}
export declare class GetQuoteListResponse extends SpeakeasyBase {
    body?: Uint8Array;
    contentType: string;
    /**
     * There are not any result matching your search condition
     */
    httpStatusVO?: shared.HTTPStatusVO;
    /**
     * Successful retrieval
     */
    quoteListVO?: shared.QuoteListVO;
    statusCode: number;
    rawResponse?: AxiosResponse;
}
