import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
export declare class FetchPatientsRequest extends SpeakeasyBase {
    /**
     * If not specified, return all patients. If set to 'true' return only archived patients, if set to 'false', return only patients who are not archived.
     */
    filterArchived?: boolean;
    /**
     * The start (inclusive) and end (exclusive) dates are ISO date and time strings separated by `..`. Example for patients created in November 2017 (America/New_York): `filter[created_at]=2017-11-01T00:00:00-04:00..2017-12-01T00:00:00-05:00`
     *
     * @remarks
     *
     */
    filterCreatedAt?: string;
    /**
     * Comma-separated list of group ids. Note that either `filter[group]` or `filter[organization]` must be specified.
     */
    filterGroups?: string;
    /**
     * Identifier system (example: "MyEHR") - requires a "filter[identifier][value]" parameter
     */
    filterIdentifierSystem?: string;
    /**
     * Identifier value (example: "12345") - requires a "filter[identifier][system]" parameter
     */
    filterIdentifierValue?: string;
    /**
     * Fitbit Plus organization id. Note that either `filter[group]` or `filter[organization]` must be specified.
     */
    filterOrganization?: string;
    /**
     * The start (inclusive) and end (exclusive) dates are ISO date and time strings separated by `..`. Example for patients updated in November 2017 (America/New_York): `filter[updated_at]=2017-11-01T00:00:00-04:00..2017-12-01T00:00:00-05:00`
     *
     * @remarks
     *
     */
    filterUpdatedAt?: string;
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
export declare class FetchPatientsResponse extends SpeakeasyBase {
    contentType: string;
    /**
     * Unauthorized
     */
    fetchErrorResponse?: shared.FetchErrorResponse;
    /**
     * OK
     */
    fetchPatientsResponse?: shared.FetchPatientsResponse;
    statusCode: number;
    rawResponse?: AxiosResponse;
}
