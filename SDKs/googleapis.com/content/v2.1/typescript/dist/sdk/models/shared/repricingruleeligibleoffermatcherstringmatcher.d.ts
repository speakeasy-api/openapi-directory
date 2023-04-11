import { SpeakeasyBase } from "../../../internal/utils";
/**
 * Matcher by string attributes.
 */
export declare class RepricingRuleEligibleOfferMatcherStringMatcher extends SpeakeasyBase {
    /**
     * String attributes, as long as such attribute of an offer is one of the string attribute values, the offer is considered as passing the matcher. The string matcher checks an offer for inclusivity in the string attributes, not equality. Only literal string matching is supported, no regex.
     */
    strAttributes?: string[];
}
