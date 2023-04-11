import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
export declare class RetrieveAllPaymentCreditorAccountsResponse extends SpeakeasyBase {
    contentType: string;
    /**
     * Retrieve all payment creditor accounts
     */
    creditorAccounts?: shared.CreditorAccount[];
    statusCode: number;
    rawResponse?: AxiosResponse;
    /**
     * Unknown Fields
     */
    retrieveAllPaymentCreditorAccounts400ApplicationJSONObject?: Record<string, any>;
    /**
     * Invalid token
     */
    retrieveAllPaymentCreditorAccounts401ApplicationJSONObject?: Record<string, any>;
    /**
     * IP Access denied
     */
    retrieveAllPaymentCreditorAccounts403ApplicationJSONObject?: Record<string, any>;
}
