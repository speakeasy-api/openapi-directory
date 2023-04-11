import { SpeakeasyBase } from "../../../internal/utils";
import { AxiosResponse } from "axios";
export declare class DeleteBankAccountRequest extends SpeakeasyBase {
    /**
     * The unique identifier of the group application in Noyo
     */
    applicationId: string;
    /**
     * The unique identifier of the bank account in Noyo
     */
    bankAccountId: string;
    /**
     * The current version identifier of the bank account
     */
    version: string;
}
export declare class DeleteBankAccountResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
    rawResponse?: AxiosResponse;
}
