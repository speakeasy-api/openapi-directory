import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
export declare class GetGrossToNetReportOutputRequest extends SpeakeasyBase {
    /**
     * The version of the api to target. Omit or set as &apos;default&apos; to target the current api version.
     */
    apiVersion: string;
    /**
     * The OAuth 1 authorization header. &apos;Auto&apos; enables auto complete.
     */
    authorization: string;
    /**
     * The employer unique key. E.g. ER001
     */
    employerKey: string;
    /**
     * The highest element index to return from the report. Used to control paging within large data sets. E.g. 100
     */
    maxIndex?: string;
    /**
     * The pay schedule unique key. E.g. SCH001
     */
    payScheduleKey: string;
    /**
     * The element index to begin the report. Used to control paging within large data sets. E.g. 1
     */
    startIndex?: string;
    /**
     * The tax period number.
     */
    taxPeriod?: string;
    /**
     * The tax year. E.g. 2017 = 2017/18 year.
     */
    taxYear: string;
}
export declare class GetGrossToNetReportOutputResponse extends SpeakeasyBase {
    contentType: string;
    /**
     * Bad Request
     */
    errorModel?: shared.ErrorModel;
    /**
     * The result of the gross to net report execution
     */
    getGrossToNetReportOutput200ApplicationJSONBinaryString?: Uint8Array;
    statusCode: number;
    rawResponse?: AxiosResponse;
}
