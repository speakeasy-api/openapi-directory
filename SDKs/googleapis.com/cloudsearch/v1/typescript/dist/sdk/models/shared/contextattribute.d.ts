import { SpeakeasyBase } from "../../../internal/utils";
/**
 * A named attribute associated with an item which can be used for influencing the ranking of the item based on the context in the request.
 */
export declare class ContextAttribute extends SpeakeasyBase {
    /**
     * The name of the attribute. It should not be empty. The maximum length is 32 characters. The name must start with a letter and can only contain letters (A-Z, a-z) or numbers (0-9). The name will be normalized (lower-cased) before being matched.
     */
    name?: string;
    /**
     * Text values of the attribute. The maximum number of elements is 10. The maximum length of an element in the array is 32 characters. The value will be normalized (lower-cased) before being matched.
     */
    values?: string[];
}
