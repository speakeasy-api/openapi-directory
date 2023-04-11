import { SpeakeasyBase } from "../../../internal/utils";
import { CodeScanningAlertDismissedReasonEnum } from "./codescanningalertdismissedreasonenum";
import { CodeScanningAlertInstance } from "./codescanningalertinstance";
import { CodeScanningAlertRuleSummary } from "./codescanningalertrulesummary";
import { CodeScanningAlertStateEnum } from "./codescanningalertstateenum";
import { CodeScanningAnalysisTool } from "./codescanninganalysistool";
import { NullableSimpleUser } from "./nullablesimpleuser";
export declare class CodeScanningAlertItems extends SpeakeasyBase {
    /**
     * The time that the alert was created in ISO 8601 format: `YYYY-MM-DDTHH:MM:SSZ`.
     */
    createdAt: Date;
    /**
     * The time that the alert was dismissed in ISO 8601 format: `YYYY-MM-DDTHH:MM:SSZ`.
     */
    dismissedAt: Date;
    /**
     * Simple User
     */
    dismissedBy: NullableSimpleUser;
    /**
     * **Required when the state is dismissed.** The reason for dismissing or closing the alert.
     */
    dismissedReason: CodeScanningAlertDismissedReasonEnum;
    /**
     * The GitHub URL of the alert resource.
     */
    htmlUrl: string;
    /**
     * The REST API URL for fetching the list of instances for an alert.
     */
    instancesUrl: string;
    mostRecentInstance: CodeScanningAlertInstance;
    /**
     * The security alert number.
     */
    number: number;
    rule: CodeScanningAlertRuleSummary;
    /**
     * State of a code scanning alert.
     */
    state: CodeScanningAlertStateEnum;
    tool: CodeScanningAnalysisTool;
    /**
     * The REST API URL of the alert resource.
     */
    url: string;
}
