import { SpeakeasyBase } from "../../../internal/utils";
import { AxiosResponse } from "axios";
export declare class AccountsBalanceGetResponse extends SpeakeasyBase {
    /**
     * OK
     */
    accountsGetResponse?: Record<string, any>;
    contentType: string;
    statusCode: number;
    rawResponse?: AxiosResponse;
}
