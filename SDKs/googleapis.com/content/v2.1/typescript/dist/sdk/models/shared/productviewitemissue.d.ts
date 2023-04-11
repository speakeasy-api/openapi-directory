import { SpeakeasyBase } from "../../../internal/utils";
import { ProductViewItemIssueItemIssueSeverity } from "./productviewitemissueitemissueseverity";
import { ProductViewItemIssueItemIssueType } from "./productviewitemissueitemissuetype";
/**
 * Item issue resolution.
 */
export declare enum ProductViewItemIssueResolutionEnum {
    Unknown = "UNKNOWN",
    MerchantAction = "MERCHANT_ACTION",
    PendingProcessing = "PENDING_PROCESSING"
}
/**
 * Item issue associated with the product.
 */
export declare class ProductViewItemIssue extends SpeakeasyBase {
    /**
     * Type of the item issue.
     */
    issueType?: ProductViewItemIssueItemIssueType;
    /**
     * Item issue resolution.
     */
    resolution?: ProductViewItemIssueResolutionEnum;
    /**
     * Severity of an issue per destination in a region, and aggregated severity.
     */
    severity?: ProductViewItemIssueItemIssueSeverity;
}
