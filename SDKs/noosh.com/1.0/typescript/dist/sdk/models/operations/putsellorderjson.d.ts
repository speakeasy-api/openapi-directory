import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
export declare class PutSellOrderJsonRequest extends SpeakeasyBase {
    orderUpdPersistVO?: shared.OrderUpdPersistVO;
    orderId: string;
    projectId: string;
    workgroupId: string;
}
export declare class PutSellOrderJsonResponse extends SpeakeasyBase {
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
