import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
/**
 * List of related resources to include in the response
 */
export declare enum FetchHealthProfileQuestionsIncludeEnum {
    QuestionDefinition = "question_definition",
    Answer = "answer"
}
export declare class FetchHealthProfileQuestionsRequest extends SpeakeasyBase {
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
     * Patient id to fetch healt profile questions. Note that one of the following filters must be specified: `filter[patient]`, `filter[group]`, or `filter[organization]`.
     *
     * @remarks
     *
     */
    filterPatient?: string;
    /**
     * List of related resources to include in the response
     */
    include?: FetchHealthProfileQuestionsIncludeEnum;
}
export declare class FetchHealthProfileQuestionsResponse extends SpeakeasyBase {
    contentType: string;
    /**
     * Unauthorized
     */
    fetchErrorResponse?: shared.FetchErrorResponse;
    /**
     * OK
     */
    fetchHealthProfileQuestionsResponse?: shared.FetchHealthProfileQuestionsResponse;
    statusCode: number;
    rawResponse?: AxiosResponse;
}
