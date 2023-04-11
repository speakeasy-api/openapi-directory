import { SpeakeasyBase } from "../../../internal/utils";
import { AxiosResponse } from "axios";
export declare class GetVVersionReportsStartDateToEndDateReportTypeRequest extends SpeakeasyBase {
    /**
     * The end date of the report in the format ddmmyyyy (i.e 31012016)
     */
    endDate: string;
    /**
     * The page offset to return.
     */
    page: number;
    /**
     * The number of rows to return.
     */
    pageSize: number;
    reportSubTypeId?: number;
    /**
     * Report Type Id (i.e Daily, Monthly, Annual)
     */
    reportType: string;
    /**
     * Comma separated list of site Ids.
     */
    sites: string;
    /**
     * The start date of the report in the format ddmmyyyy (i.e 31012016)
     */
    startDate: string;
    version: string;
}
export declare class GetVVersionReportsStartDateToEndDateReportTypeResponse extends SpeakeasyBase {
    contentType: string;
    object?: Record<string, any>;
    statusCode: number;
    rawResponse?: AxiosResponse;
}
