import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
export declare class FetchPatientHealthResultsRequest extends SpeakeasyBase {
    /**
     * A comma-separated list of action identifiers
     */
    filterActions?: string;
    /**
     * The start (inclusive) and end (exclusive) dates are ISO date and time strings separated by `..`. Example for results created in November 2017 (America/New_York): `filter[created_at]=2017-11-01T00:00:00-04:00..2017-12-01T00:00:00-05:00`
     *
     * @remarks
     *
     */
    filterCreatedAt?: string;
    /**
     * Filter results that occurred before the passed ISO date and time string
     */
    filterEndAt?: string;
    /**
     * Filter the patient health results for a specified patient
     */
    filterPatient: string;
    /**
     * Filter results that occurred after the passed ISO date and time string
     */
    filterStartAt?: string;
    /**
     * A comma-separated list of thread identifiers
     */
    filterThreads?: string;
    /**
     * The start (inclusive) and end (exclusive) dates are ISO date and time strings separated by `..`. Example for results updated in November 2017 (America/New_York): `filter[updated_at]=2017-11-01T00:00:00-04:00..2017-12-01T00:00:00-05:00`
     *
     * @remarks
     *
     */
    filterUpdatedAt?: string;
    /**
     * Page cursor
     */
    pageAfter?: string;
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
export declare class FetchPatientHealthResultsResponse extends SpeakeasyBase {
    contentType: string;
    /**
     * Unauthorized
     */
    fetchErrorResponse?: shared.FetchErrorResponse;
    /**
     * OK
     */
    fetchPatientHealthResultResponse?: shared.FetchPatientHealthResultResponse;
    statusCode: number;
    rawResponse?: AxiosResponse;
}
