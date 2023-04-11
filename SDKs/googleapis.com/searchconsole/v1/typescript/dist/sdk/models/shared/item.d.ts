import { SpeakeasyBase } from "../../../internal/utils";
import { RichResultsIssue } from "./richresultsissue";
/**
 * A specific rich result found on the page.
 */
export declare class Item extends SpeakeasyBase {
    /**
     * A list of zero or more rich result issues found for this instance.
     */
    issues?: RichResultsIssue[];
    /**
     * The user-provided name of this item.
     */
    name?: string;
}
