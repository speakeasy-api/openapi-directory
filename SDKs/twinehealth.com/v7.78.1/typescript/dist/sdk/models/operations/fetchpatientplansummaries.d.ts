import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
/**
 * List of related resources to include in the response
 */
export declare enum FetchPatientPlanSummariesIncludeEnum {
    Actions = "actions",
    Bundles = "bundles",
    Patient = "patient",
    CurrentResults = "current_results"
}
export declare class FetchPatientPlanSummariesRequest extends SpeakeasyBase {
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
     * Patient id to fetch plan summary for. Note that one of the following filters must be specified: `filter[patient]`, `filter[groups]`, `filter[organization]`.
     *
     * @remarks
     *
     */
    filterPatient?: string;
    /**
     * List of related resources to include in the response
     */
    include?: FetchPatientPlanSummariesIncludeEnum;
}
export declare class FetchPatientPlanSummariesResponse extends SpeakeasyBase {
    contentType: string;
    /**
     * Unauthorized
     */
    fetchErrorResponse?: shared.FetchErrorResponse;
    /**
     * OK
     */
    fetchPatientPlanSummariesResponse?: shared.FetchPatientPlanSummariesResponse;
    statusCode: number;
    rawResponse?: AxiosResponse;
}
