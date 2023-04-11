import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
export declare class PostBuyOrderJsonRequest extends SpeakeasyBase {
    orderPO?: shared.OrderPO;
    projectId: string;
    workgroupId: string;
}
export declare class PostBuyOrderJsonResponse extends SpeakeasyBase {
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
