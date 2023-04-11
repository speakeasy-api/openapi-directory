import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
export declare class QualityGetDailyDataQualityForSiteRequest extends SpeakeasyBase {
    /**
     * The end date of the report in the format ddmmyyyy (i.e 31012016)
     */
    endDate: string;
    siteId: string;
    /**
     * The start date of the report in the format ddmmyyyy (i.e 31012016)
     */
    startDate: string;
    version: string;
}
export declare class QualityGetDailyDataQualityForSiteResponse extends SpeakeasyBase {
    contentType: string;
    dailyQualityResponse?: shared.DailyQualityResponse;
    statusCode: number;
    rawResponse?: AxiosResponse;
}
