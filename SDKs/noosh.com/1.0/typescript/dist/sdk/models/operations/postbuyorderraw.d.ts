import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
export declare class PostBuyOrderRawRequest extends SpeakeasyBase {
    requestBody?: Uint8Array;
    projectId: string;
    workgroupId: string;
}
export declare class PostBuyOrderRawResponse extends SpeakeasyBase {
    body?: Uint8Array;
    contentType: string;
    /**
     * Invalid data
     */
    httpStatusVO?: shared.HTTPStatusVO;
    /**
     * Successful created
     */
    orderPO?: shared.OrderPO;
    statusCode: number;
    rawResponse?: AxiosResponse;
}
