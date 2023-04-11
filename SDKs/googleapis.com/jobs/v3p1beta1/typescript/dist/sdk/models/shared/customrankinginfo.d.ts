import { SpeakeasyBase } from "../../../internal/utils";
/**
 * Required. Controls over how important the score of CustomRankingInfo.ranking_expression gets applied to job's final ranking position. An error is thrown if not specified.
 */
export declare enum CustomRankingInfoImportanceLevelEnum {
    ImportanceLevelUnspecified = "IMPORTANCE_LEVEL_UNSPECIFIED",
    None = "NONE",
    Low = "LOW",
    Mild = "MILD",
    Medium = "MEDIUM",
    High = "HIGH",
    Extreme = "EXTREME"
}
/**
 * Input only. Custom ranking information for SearchJobsRequest.
 */
export declare class CustomRankingInfo extends SpeakeasyBase {
    /**
     * Required. Controls over how important the score of CustomRankingInfo.ranking_expression gets applied to job's final ranking position. An error is thrown if not specified.
     */
    importanceLevel?: CustomRankingInfoImportanceLevelEnum;
    /**
     * Required. Controls over how job documents get ranked on top of existing relevance score (determined by API algorithm). A combination of the ranking expression and relevance score is used to determine job's final ranking position. The syntax for this expression is a subset of Google SQL syntax. Supported operators are: +, -, *, /, where the left and right side of the operator is either a numeric Job.custom_attributes key, integer/double value or an expression that can be evaluated to a number. Parenthesis are supported to adjust calculation precedence. The expression must be < 200 characters in length. The expression is considered invalid for a job if the expression references custom attributes that are not populated on the job or if the expression results in a divide by zero. If an expression is invalid for a job, that job is demoted to the end of the results. Sample ranking expression (year + 25) * 0.25 - (freshness / 0.5)
     */
    rankingExpression?: string;
}
