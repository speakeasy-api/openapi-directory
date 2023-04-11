import { SpeakeasyBase } from "../../../internal/utils";
/**
 * The completion topic.
 */
export declare enum CompletionResultTypeEnum {
    CompletionTypeUnspecified = "COMPLETION_TYPE_UNSPECIFIED",
    JobTitle = "JOB_TITLE",
    CompanyName = "COMPANY_NAME",
    Combined = "COMBINED"
}
/**
 * Output only. Resource that represents completion results.
 */
export declare class CompletionResult extends SpeakeasyBase {
    /**
     * The URI of the company image for CompletionType.COMPANY_NAME.
     */
    imageUri?: string;
    /**
     * The suggestion for the query.
     */
    suggestion?: string;
    /**
     * The completion topic.
     */
    type?: CompletionResultTypeEnum;
}
