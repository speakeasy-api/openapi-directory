import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
export declare class QualityGetOverallDataQualityForSitesRequest extends SpeakeasyBase {
    /**
     * The end date of the report in the format ddmmyyyy (i.e 31012016)
     */
    endDate: string;
    /**
     * Get site quality by site id delimited by ,
     */
    sites: string;
    /**
     * The start date of the report in the format ddmmyyyy (i.e 31012016)
     */
    startDate: string;
    version: string;
}
export declare class QualityGetOverallDataQualityForSitesResponse extends SpeakeasyBase {
    contentType: string;
    overallQualityResponse?: shared.OverallQualityResponse;
    statusCode: number;
    rawResponse?: AxiosResponse;
}
