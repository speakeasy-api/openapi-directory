import { SpeakeasyBase } from "../../../internal/utils";
import { AxiosResponse } from "axios";
export declare class BankTransferEventListResponse extends SpeakeasyBase {
    /**
     * OK
     */
    bankTransferEventListResponse?: Record<string, any>;
    contentType: string;
    /**
     * Error response
     */
    plaidError?: Record<string, any>;
    statusCode: number;
    rawResponse?: AxiosResponse;
}
