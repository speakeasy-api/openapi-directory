import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
export declare class GetV1WorkgroupsWorkgroupIdQuotesRequest extends SpeakeasyBase {
    /**
     * Quote Object State Id, use /workgroups/{workgroup_id}/quoteStates to get correct value
     */
    quoteStateIdUseFiltersEqualQuoteStateId111111?: string;
    workgroupId: string;
}
export declare class GetV1WorkgroupsWorkgroupIdQuotesResponse extends SpeakeasyBase {
    body?: Uint8Array;
    contentType: string;
    /**
     * There are not any result matching your search condition
     */
    httpStatusVO?: shared.HTTPStatusVO;
    /**
     * Successful retrieval
     */
    quoteOfWgLevelSimpleVO?: shared.QuoteOfWgLevelSimpleVO;
    statusCode: number;
    rawResponse?: AxiosResponse;
}
