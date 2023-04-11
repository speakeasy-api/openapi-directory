import { SpeakeasyBase } from "../../../internal/utils";
import { ProductViewItemIssueIssueSeverityPerDestination } from "./productviewitemissueissueseverityperdestination";
/**
 * Severity of an issue aggregated for destination.
 */
export declare enum ProductViewItemIssueItemIssueSeverityAggregatedSeverityEnum {
    AggregatedIssueSeverityUnspecified = "AGGREGATED_ISSUE_SEVERITY_UNSPECIFIED",
    Disapproved = "DISAPPROVED",
    Demoted = "DEMOTED",
    Pending = "PENDING"
}
/**
 * Severity of an issue per destination in a region, and aggregated severity.
 */
export declare class ProductViewItemIssueItemIssueSeverity extends SpeakeasyBase {
    /**
     * Severity of an issue aggregated for destination.
     */
    aggregatedSeverity?: ProductViewItemIssueItemIssueSeverityAggregatedSeverityEnum;
    /**
     * Item issue severity for every destination.
     */
    severityPerDestination?: ProductViewItemIssueIssueSeverityPerDestination[];
}
