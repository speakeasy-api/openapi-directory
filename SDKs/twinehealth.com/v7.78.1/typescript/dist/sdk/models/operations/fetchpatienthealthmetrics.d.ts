import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
export declare class FetchPatientHealthMetricsRequest extends SpeakeasyBase {
    /**
     * Comma-separated list of group ids. Note that one of the following filters must be specified: `filter[patient]`, `filter[groups]`, `filter[organization]`.
     *
     * @remarks
     *
     */
    filterGroups?: string;
    /**
     * Fitbit Plus organization id. Note that one of the following filters must be specified: `filter[patient]`, `filter[groups]`, `filter[organization]`.
     *
     * @remarks
     *
     */
    filterOrganization?: string;
    /**
     * Filter the patient health metrics for a specified patient. Note that one of the following filters must be specified: `filter[patient]`, `filter[groups]`, `filter[organization]`.
     *
     * @remarks
     *
     */
    filterPatient?: string;
    /**
     * Page cursor
     */
    pageCursor?: string;
    /**
     * Page limit
     */
    pageLimit?: number;
    /**
     * Page number
     */
    pageNumber?: number;
    /**
     * Page size
     */
    pageSize?: number;
}
export declare class FetchPatientHealthMetricsResponse extends SpeakeasyBase {
    contentType: string;
    /**
     * Unauthorized
     */
    fetchErrorResponse?: shared.FetchErrorResponse;
    /**
     * OK
     */
    fetchPatientHealthMetricResponse?: shared.FetchPatientHealthMetricResponse;
    statusCode: number;
    rawResponse?: AxiosResponse;
}
