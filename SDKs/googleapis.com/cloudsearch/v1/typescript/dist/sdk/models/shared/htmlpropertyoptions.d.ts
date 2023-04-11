import { SpeakeasyBase } from "../../../internal/utils";
import { HtmlOperatorOptions } from "./htmloperatoroptions";
import { RetrievalImportance } from "./retrievalimportance";
/**
 * The options for html properties.
 */
export declare class HtmlPropertyOptions extends SpeakeasyBase {
    /**
     * Used to provide a search operator for html properties. This is optional. Search operators let users restrict the query to specific fields relevant to the type of item being searched.
     */
    operatorOptions?: HtmlOperatorOptions;
    retrievalImportance?: RetrievalImportance;
}
