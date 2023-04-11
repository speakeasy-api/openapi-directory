import { SpeakeasyBase } from "../../../internal/utils";
import { AxiosResponse } from "axios";
export declare class BankTransferSweepGetResponse extends SpeakeasyBase {
    /**
     * OK
     */
    bankTransferSweepGetResponse?: Record<string, any>;
    contentType: string;
    /**
     * Error response
     */
    plaidError?: Record<string, any>;
    statusCode: number;
    rawResponse?: AxiosResponse;
}
