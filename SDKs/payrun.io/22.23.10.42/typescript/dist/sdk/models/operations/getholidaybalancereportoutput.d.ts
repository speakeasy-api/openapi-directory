import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
export declare class GetHolidayBalanceReportOutputRequest extends SpeakeasyBase {
    /**
     * The version of the api to target. Omit or set as &apos;default&apos; to target the current api version.
     */
    apiVersion: string;
    /**
     * The OAuth 1 authorization header. &apos;Auto&apos; enables auto complete.
     */
    authorization: string;
    /**
     * A comma separated list of the employee codes. E.g. EMP001,EMP002
     */
    employeeCodes?: string;
    /**
     * The employer unique key. E.g. ER001
     */
    employerKey: string;
    /**
     * The holiday year end for the report. E.g. 2018-12-31
     */
    holidayYearEnd: Date;
    /**
     * The highest element index to return from the report. Used to control paging within large data sets. E.g. 100
     */
    maxIndex?: string;
    /**
     * The element index to begin the report. Used to control paging within large data sets. E.g. 1
     */
    startIndex?: string;
}
export declare class GetHolidayBalanceReportOutputResponse extends SpeakeasyBase {
    contentType: string;
    /**
     * Bad Request
     */
    errorModel?: shared.ErrorModel;
    /**
     * The result of the holiday balance report execution
     */
    getHolidayBalanceReportOutput200ApplicationJSONBinaryString?: Uint8Array;
    statusCode: number;
    rawResponse?: AxiosResponse;
}
