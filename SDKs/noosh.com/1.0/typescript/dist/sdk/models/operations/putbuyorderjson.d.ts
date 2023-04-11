import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
export declare class PutBuyOrderJsonRequest extends SpeakeasyBase {
    orderUpdPersistVO?: shared.OrderUpdPersistVO;
    orderId: string;
    projectId: string;
    workgroupId: string;
}
export declare class PutBuyOrderJsonResponse extends SpeakeasyBase {
    body?: Uint8Array;
    contentType: string;
    /**
     * There are not any result matching your search condition
     */
    httpStatusVO?: shared.HTTPStatusVO;
    /**
     * Successful updated
     */
    orderVO?: shared.OrderVO;
    statusCode: number;
    rawResponse?: AxiosResponse;
}
