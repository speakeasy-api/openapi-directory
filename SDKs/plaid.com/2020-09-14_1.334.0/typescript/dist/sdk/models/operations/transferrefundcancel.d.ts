import { SpeakeasyBase } from "../../../internal/utils";
import { AxiosResponse } from "axios";
export declare class TransferRefundCancelResponse extends SpeakeasyBase {
    contentType: string;
    /**
     * Error response
     */
    plaidError?: Record<string, any>;
    statusCode: number;
    rawResponse?: AxiosResponse;
    /**
     * OK
     */
    transferRefundCancelResponse?: Record<string, any>;
}
