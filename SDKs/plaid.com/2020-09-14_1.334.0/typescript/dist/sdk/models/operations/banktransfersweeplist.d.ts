import { SpeakeasyBase } from "../../../internal/utils";
import { AxiosResponse } from "axios";
export declare class BankTransferSweepListResponse extends SpeakeasyBase {
    /**
     * OK
     */
    bankTransferSweepListResponse?: Record<string, any>;
    contentType: string;
    /**
     * Error response
     */
    plaidError?: Record<string, any>;
    statusCode: number;
    rawResponse?: AxiosResponse;
}
