import { SpeakeasyBase } from "../../../internal/utils";
import { RetrievalImportance } from "./retrievalimportance";
import { TextOperatorOptions } from "./textoperatoroptions";
/**
 * The options for text properties.
 */
export declare class TextPropertyOptions extends SpeakeasyBase {
    /**
     * Used to provide a search operator for text properties. This is optional. Search operators let users restrict the query to specific fields relevant to the type of item being searched.
     */
    operatorOptions?: TextOperatorOptions;
    retrievalImportance?: RetrievalImportance;
}
