import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
/**
 * The period to analyse in, one of `weeks`, `months` or `years`. Also supported is `event`, although event period analysis is only possible when the budget events gathered align, so in this case where all categories are analysed together, it's highly unlikely that event period analysis will be possible.
 */
export declare enum GetUsersIdBudgetSummaryPeriodEnum {
    Weeks = "weeks",
    Months = "months",
    Years = "years",
    Event = "event"
}
export declare class GetUsersIdBudgetSummaryRequest extends SpeakeasyBase {
    /**
     * The date to stop analysing the budget from. This will be bumped out to make full periods as necessary.
     */
    endDate: string;
    /**
     * The unique identifier of the user.
     */
    id: number;
    /**
     * The period interval, e.g. if the interval is 2 and the period is weeks, the budget will be analysed fortnightly.
     */
    interval: number;
    /**
     * The period to analyse in, one of `weeks`, `months` or `years`. Also supported is `event`, although event period analysis is only possible when the budget events gathered align, so in this case where all categories are analysed together, it's highly unlikely that event period analysis will be possible.
     */
    period: GetUsersIdBudgetSummaryPeriodEnum;
    /**
     * The date to start analysing the budget from. This will be bumped out to make full periods as necessary.
     */
    startDate: string;
}
export declare class GetUsersIdBudgetSummaryResponse extends SpeakeasyBase {
    /**
     * Success
     */
    budgetAnalysisPackages?: shared.BudgetAnalysisPackage[];
    contentType: string;
    /**
     * Bad Request
     */
    error?: shared.ErrorT;
    statusCode: number;
    rawResponse?: AxiosResponse;
}
