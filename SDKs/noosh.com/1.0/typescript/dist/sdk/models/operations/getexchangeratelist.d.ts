import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
export declare class GetExchangeRateListRequest extends SpeakeasyBase {
    workgroupId: string;
}
export declare class GetExchangeRateListResponse extends SpeakeasyBase {
    body?: Uint8Array;
    contentType: string;
    /**
     * There are not any result matching your search condition
     */
    httpStatusVO?: shared.HTTPStatusVO;
    /**
     * Successful updated
     */
    multiExchangeRateListVO?: shared.MultiExchangeRateListVO;
    statusCode: number;
    rawResponse?: AxiosResponse;
}
