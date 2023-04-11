import { SpeakeasyBase } from "../../../internal/utils";
/**
 * Query terms that we want to match on.
 */
export declare class GoogleCloudRetailV2alphaConditionQueryTerm extends SpeakeasyBase {
    /**
     * Whether this is supposed to be a full or partial match.
     */
    fullMatch?: boolean;
    /**
     * The value of the term to match on. Value cannot be empty. Value can have at most 3 terms if specified as a partial match. Each space separated string is considered as one term. For example, "a b c" is 3 terms and allowed, but " a b c d" is 4 terms and not allowed for a partial match.
     */
    value?: string;
}
