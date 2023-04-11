import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
export declare class PostExchangeRateJsonRequest extends SpeakeasyBase {
    multiExchangeRatePersistListVO?: shared.MultiExchangeRatePersistListVO;
    workgroupId: string;
}
export declare class PostExchangeRateJsonResponse extends SpeakeasyBase {
    body?: Uint8Array;
    contentType: string;
    /**
     * Successful updated
     */
    httpStatus?: any;
    /**
     * There are not any result matching your search condition
     */
    httpStatusVO?: shared.HTTPStatusVO;
    statusCode: number;
    rawResponse?: AxiosResponse;
}
