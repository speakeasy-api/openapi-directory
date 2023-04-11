import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
export declare class PutSellOrderRawRequest extends SpeakeasyBase {
    requestBody?: Uint8Array;
    orderId: string;
    projectId: string;
    workgroupId: string;
}
export declare class PutSellOrderRawResponse extends SpeakeasyBase {
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
