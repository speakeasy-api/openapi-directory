import { SpeakeasyBase } from "../../../internal/utils";
/**
 * Issue severity for all affected regions in a destination.
 */
export declare class ProductViewItemIssueIssueSeverityPerDestination extends SpeakeasyBase {
    /**
     * List of demoted countries in the destination.
     */
    demotedCountries?: string[];
    /**
     * Issue destination.
     */
    destination?: string;
    /**
     * List of disapproved countries in the destination.
     */
    disapprovedCountries?: string[];
}
