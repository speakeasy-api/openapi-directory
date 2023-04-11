import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
export declare class GetUsersIdBudgetRequest extends SpeakeasyBase {
    /**
     * The unique identifier of the account.
     */
    id: number;
    /**
     * Whether parent categories should have their children rolled up into them. When used, the children will still appear in the collection on their own, but their actual and forecast figures will be rolled up to the root parent.
     */
    rollUp?: boolean;
}
export declare class GetUsersIdBudgetResponse extends SpeakeasyBase {
    /**
     * Success
     */
    budgetAnalysisPackages?: shared.BudgetAnalysisPackage[];
    contentType: string;
    statusCode: number;
    rawResponse?: AxiosResponse;
}
