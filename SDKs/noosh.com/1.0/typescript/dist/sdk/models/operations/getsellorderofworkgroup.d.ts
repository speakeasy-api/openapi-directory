import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
export declare class GetSellOrderOfWorkgroupRequest extends SpeakeasyBase {
    orderId: string;
    workgroupId: string;
}
export declare class GetSellOrderOfWorkgroupResponse extends SpeakeasyBase {
    body?: Uint8Array;
    contentType: string;
    /**
     * There are not any result matching your search condition
     */
    httpStatusVO?: shared.HTTPStatusVO;
    /**
     * Successful retrieval
     */
    orderExpandWorkgroupLevelVO?: shared.OrderExpandWorkgroupLevelVO;
    statusCode: number;
    rawResponse?: AxiosResponse;
}
