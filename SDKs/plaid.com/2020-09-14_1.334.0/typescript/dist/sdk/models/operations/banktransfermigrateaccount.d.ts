import { SpeakeasyBase } from "../../../internal/utils";
import { AxiosResponse } from "axios";
export declare class BankTransferMigrateAccountResponse extends SpeakeasyBase {
    /**
     * OK
     */
    bankTransferMigrateAccountResponse?: Record<string, any>;
    contentType: string;
    /**
     * Error response
     */
    plaidError?: Record<string, any>;
    statusCode: number;
    rawResponse?: AxiosResponse;
}
