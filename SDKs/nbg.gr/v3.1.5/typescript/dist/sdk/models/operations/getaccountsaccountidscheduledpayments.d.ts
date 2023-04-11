import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
export declare class GetAccountsAccountIdScheduledPaymentsSecurity extends SpeakeasyBase {
    authorizationCodeToken: string;
    clientId: string;
}
export declare class GetAccountsAccountIdScheduledPaymentsRequest extends SpeakeasyBase {
    /**
     * AccountId
     */
    accountId: string;
    /**
     * The unique id of the sandbox to be used
     */
    sandboxId: string;
    /**
     * Indicates the user-agent that the PSU is using.
     */
    xCustomerUserAgent?: string;
    /**
     * The time when the PSU last logged in with the TPP.
     *
     * @remarks
     * All dates in the HTTP headers are represented as RFC 7231 Full Dates. An example is below:
     * Sun, 10 Sep 2017 19:43:31 UTC
     */
    xFapiAuthDate?: string;
    /**
     * The PSU's IP address if the PSU is currently logged in with the TPP.
     */
    xFapiCustomerIpAddress?: string;
    /**
     * An RFC4122 UID used as a correlation id.
     */
    xFapiInteractionId?: string;
}
export declare class GetAccountsAccountIdScheduledPaymentsResponse extends SpeakeasyBase {
    contentType: string;
    /**
     * Bad request
     */
    obErrorResponse1?: shared.OBErrorResponse1;
    /**
     * Scheduled Payments Read
     */
    obReadScheduledPayment3?: shared.OBReadScheduledPayment3;
    statusCode: number;
    rawResponse?: AxiosResponse;
}
