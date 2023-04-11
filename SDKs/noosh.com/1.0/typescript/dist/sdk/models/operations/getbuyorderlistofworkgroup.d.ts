import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
export declare class GetBuyOrderListOfWorkgroupRequest extends SpeakeasyBase {
    workgroupId: string;
}
export declare class GetBuyOrderListOfWorkgroupResponse extends SpeakeasyBase {
    body?: Uint8Array;
    contentType: string;
    /**
     * There are not any result matching your search condition
     */
    httpStatusVO?: shared.HTTPStatusVO;
    /**
     * Successful retrieval
     */
    orderWorkgroupLevelListVO?: shared.OrderWorkgroupLevelListVO;
    statusCode: number;
    rawResponse?: AxiosResponse;
}
