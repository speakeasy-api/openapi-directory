import { SpeakeasyBase } from "../../../internal/utils";
/**
 * The reason the user selected in the cancel survey.
 */
export declare enum CancelSurveyResultReasonEnum {
    CancelSurveyReasonUnspecified = "CANCEL_SURVEY_REASON_UNSPECIFIED",
    CancelSurveyReasonNotEnoughUsage = "CANCEL_SURVEY_REASON_NOT_ENOUGH_USAGE",
    CancelSurveyReasonTechnicalIssues = "CANCEL_SURVEY_REASON_TECHNICAL_ISSUES",
    CancelSurveyReasonCostRelated = "CANCEL_SURVEY_REASON_COST_RELATED",
    CancelSurveyReasonFoundBetterApp = "CANCEL_SURVEY_REASON_FOUND_BETTER_APP",
    CancelSurveyReasonOthers = "CANCEL_SURVEY_REASON_OTHERS"
}
/**
 * Result of the cancel survey when the subscription was canceled by the user.
 */
export declare class CancelSurveyResult extends SpeakeasyBase {
    /**
     * The reason the user selected in the cancel survey.
     */
    reason?: CancelSurveyResultReasonEnum;
    /**
     * Only set for CANCEL_SURVEY_REASON_OTHERS. This is the user's freeform response to the survey.
     */
    reasonUserInput?: string;
}
