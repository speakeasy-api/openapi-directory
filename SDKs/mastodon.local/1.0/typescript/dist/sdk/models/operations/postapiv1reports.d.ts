import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
export declare class PostApiV1ReportsSecurity extends SpeakeasyBase {
    bearerAuth: string;
}
export declare class PostApiV1ReportsRequestBody extends SpeakeasyBase {
    /**
     * ID of the account to report
     */
    accountId: string;
    /**
     * Reason for the report (default max 1000 characters)
     */
    comment?: string;
    /**
     * If the account is remote, should the report be forwarded to the remote admin?
     */
    forward?: boolean;
    /**
     * Array of Statuses to attach to the report, for context
     */
    statusIds?: string[];
}
export declare class PostApiV1ReportsResponse extends SpeakeasyBase {
    contentType: string;
    /**
     * Invalid or missing Authorization header
     */
    error?: shared.ErrorT;
    /**
     * Successfully reported.
     */
    report?: shared.Report;
    statusCode: number;
    rawResponse?: AxiosResponse;
}
