import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
/**
 * List of related resources to include in the response
 */
export declare enum FetchHealthProfileAnswersIncludeEnum {
    Patient = "patient"
}
export declare class FetchHealthProfileAnswersRequest extends SpeakeasyBase {
    /**
     * Comma-separated list of group ids. Note that one of the following filters must be specified: `filter[patient]`, `filter[group]`, or `filter[organization]`.
     *
     * @remarks
     *
     */
    filterGroups?: string;
    /**
     * Fitbit Plus organization id. Note that one of the following filters must be specified: `filter[patient]`, `filter[group]`, or `filter[organization]`.
     *
     * @remarks
     *
     */
    filterOrganization?: string;
    /**
     * Patient id to fetch healt profile answers. Note that one of the following filters must be specified: `filter[patient]`, `filter[group]`, or `filter[organization]`.
     *
     * @remarks
     *
     */
    filterPatient?: string;
    /**
     * List of related resources to include in the response
     */
    include?: FetchHealthProfileAnswersIncludeEnum;
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
export declare class FetchHealthProfileAnswersResponse extends SpeakeasyBase {
    contentType: string;
    /**
     * Unauthorized
     */
    fetchErrorResponse?: shared.FetchErrorResponse;
    /**
     * OK
     */
    fetchHealthProfileAnswersResponse?: shared.FetchHealthProfileAnswersResponse;
    statusCode: number;
    rawResponse?: AxiosResponse;
}
