import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
export declare class GetsEmployeePayStatementSummaryDataBasedOnTheSpecifiedYearAndCheckDateSecurity extends SpeakeasyBase {
    paylocityAuth: string;
}
export declare class GetsEmployeePayStatementSummaryDataBasedOnTheSpecifiedYearAndCheckDateRequest extends SpeakeasyBase {
    /**
     * The check date for which to retrieve pay statement data
     */
    checkDate: string;
    /**
     * Retrieve pay statement details related to specific deduction, earning or tax types. Common values include 401k, Memo, Reg, OT, Cash Tips, FED and SITW.
     */
    codegroup?: string;
    /**
     * Company Id
     */
    companyId: string;
    /**
     * Employee Id
     */
    employeeId: string;
    /**
     * Whether to include the total record count in the header's X-Pcty-Total-Count property. Default value is true.
     */
    includetotalcount?: boolean;
    /**
     * Page number to retrieve; page numbers are 0-based (so to get the first page of results, pass pagenumber=0). Default value is 0.
     */
    pagenumber?: number;
    /**
     * Number of records per page. Default value is 25.
     */
    pagesize?: number;
    /**
     * The year for which to retrieve pay statement data
     */
    year: string;
}
export declare class GetsEmployeePayStatementSummaryDataBasedOnTheSpecifiedYearAndCheckDateResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
    rawResponse?: AxiosResponse;
    /**
     * The employee, specified year, or check date does not exist
     */
    errors?: shared.ErrorT[];
    /**
     * Successfully Retrieved
     */
    payStatementSummaries?: shared.PayStatementSummary[];
}
