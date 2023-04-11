import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
export declare class GetFilePaymentsFilePaymentIdReportFileSecurity extends SpeakeasyBase {
    tppoAuth2Security: string;
}
export declare class GetFilePaymentsFilePaymentIdReportFileRequest extends SpeakeasyBase {
    /**
     * An Authorisation Token as per https://tools.ietf.org/html/rfc6750
     */
    authorization: string;
    /**
     * FilePaymentId
     */
    filePaymentId: string;
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
export declare class GetFilePaymentsFilePaymentIdReportFileResponse extends SpeakeasyBase {
    body?: Uint8Array;
    contentType: string;
    /**
     * File Payments Read
     */
    file?: Record<string, any>;
    headers?: Record<string, string[]>;
    /**
     * Bad request
     */
    obErrorResponse1?: shared.OBErrorResponse1;
    statusCode: number;
    rawResponse?: AxiosResponse;
}
