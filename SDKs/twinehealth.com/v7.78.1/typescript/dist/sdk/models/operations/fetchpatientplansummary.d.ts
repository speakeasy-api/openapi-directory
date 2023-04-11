import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
/**
 * List of related resources to include in the response
 */
export declare enum FetchPatientPlanSummaryIncludeEnum {
    Actions = "actions",
    Bundles = "bundles",
    Patient = "patient",
    CurrentResults = "current_results"
}
export declare class FetchPatientPlanSummaryRequest extends SpeakeasyBase {
    /**
     * Plan summary identifier
     */
    id: string;
    /**
     * List of related resources to include in the response
     */
    include?: FetchPatientPlanSummaryIncludeEnum;
}
export declare class FetchPatientPlanSummaryResponse extends SpeakeasyBase {
    contentType: string;
    /**
     * Unauthorized
     */
    fetchErrorResponse?: shared.FetchErrorResponse;
    /**
     * OK
     */
    fetchPatientPlanSummaryResponse?: shared.FetchPatientPlanSummaryResponse;
    statusCode: number;
    rawResponse?: AxiosResponse;
}
