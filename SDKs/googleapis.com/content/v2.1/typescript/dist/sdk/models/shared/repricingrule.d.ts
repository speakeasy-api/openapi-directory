import { SpeakeasyBase } from "../../../internal/utils";
import { RepricingRuleCostOfGoodsSaleRule } from "./repricingrulecostofgoodssalerule";
import { RepricingRuleEffectiveTime } from "./repricingruleeffectivetime";
import { RepricingRuleEligibleOfferMatcher } from "./repricingruleeligibleoffermatcher";
import { RepricingRuleRestriction } from "./repricingrulerestriction";
import { RepricingRuleStatsBasedRule } from "./repricingrulestatsbasedrule";
/**
 * Required. Immutable. The type of the rule.
 */
export declare enum RepricingRuleTypeEnum {
    RepricingRuleTypeUnspecified = "REPRICING_RULE_TYPE_UNSPECIFIED",
    TypeStatsBased = "TYPE_STATS_BASED",
    TypeCogsBased = "TYPE_COGS_BASED",
    TypeSalesVolumeBased = "TYPE_SALES_VOLUME_BASED",
    TypeCompetitivePrice = "TYPE_COMPETITIVE_PRICE"
}
/**
 * Represents a repricing rule. A repricing rule is used by shopping serving to adjust transactable offer prices if conditions are met.
 */
export declare class RepricingRuleInput extends SpeakeasyBase {
    /**
     * A repricing rule that changes the sale price based on cost of goods sale.
     */
    cogsBasedRule?: RepricingRuleCostOfGoodsSaleRule;
    /**
     * Required. Immutable. [CLDR country code](http://www.unicode.org/repos/cldr/tags/latest/common/main/en.xml) (e.g. "US").
     */
    countryCode?: string;
    effectiveTimePeriod?: RepricingRuleEffectiveTime;
    /**
     * Matcher that specifies eligible offers. When the USE_FEED_ATTRIBUTE option is selected, only the repricing_rule_id attribute on the product feed is used to specify offer-rule mapping. When the CUSTOM_FILTER option is selected, only the *_matcher fields are used to filter the offers for offer-rule mapping. If the CUSTOM_FILTER option is selected, an offer needs to satisfy each custom filter matcher to be eligible for a rule. Size limit: the sum of the number of entries in all the matchers should not exceed 20. For example, there can be 15 product ids and 5 brands, but not 10 product ids and 11 brands.
     */
    eligibleOfferMatcher?: RepricingRuleEligibleOfferMatcher;
    /**
     * Required. Immutable. The two-letter ISO 639-1 language code associated with the repricing rule.
     */
    languageCode?: string;
    /**
     * Represents whether a rule is paused. A paused rule will behave like a non-paused rule within CRUD operations, with the major difference that a paused rule will not be evaluated and will have no effect on offers.
     */
    paused?: boolean;
    /**
     * Definition of a rule restriction. At least one of the following needs to be true: (1) use_auto_pricing_min_price is true (2) floor.price_delta exists (3) floor.percentage_delta exists If floor.price_delta and floor.percentage_delta are both set on a rule, the highest value will be chosen by the Repricer. In other words, for a product with a price of $50, if the `floor.percentage_delta` is "-10" and the floor.price_delta is "-12", the offer price will only be lowered $5 (10% lower than the original offer price).
     */
    restriction?: RepricingRuleRestriction;
    /**
     * Definition of stats based rule.
     */
    statsBasedRule?: RepricingRuleStatsBasedRule;
    /**
     * The title for the rule.
     */
    title?: string;
    /**
     * Required. Immutable. The type of the rule.
     */
    type?: RepricingRuleTypeEnum;
}
/**
 * Represents a repricing rule. A repricing rule is used by shopping serving to adjust transactable offer prices if conditions are met.
 */
export declare class RepricingRule extends SpeakeasyBase {
    /**
     * A repricing rule that changes the sale price based on cost of goods sale.
     */
    cogsBasedRule?: RepricingRuleCostOfGoodsSaleRule;
    /**
     * Required. Immutable. [CLDR country code](http://www.unicode.org/repos/cldr/tags/latest/common/main/en.xml) (e.g. "US").
     */
    countryCode?: string;
    effectiveTimePeriod?: RepricingRuleEffectiveTime;
    /**
     * Matcher that specifies eligible offers. When the USE_FEED_ATTRIBUTE option is selected, only the repricing_rule_id attribute on the product feed is used to specify offer-rule mapping. When the CUSTOM_FILTER option is selected, only the *_matcher fields are used to filter the offers for offer-rule mapping. If the CUSTOM_FILTER option is selected, an offer needs to satisfy each custom filter matcher to be eligible for a rule. Size limit: the sum of the number of entries in all the matchers should not exceed 20. For example, there can be 15 product ids and 5 brands, but not 10 product ids and 11 brands.
     */
    eligibleOfferMatcher?: RepricingRuleEligibleOfferMatcher;
    /**
     * Required. Immutable. The two-letter ISO 639-1 language code associated with the repricing rule.
     */
    languageCode?: string;
    /**
     * Output only. Immutable. Merchant that owns the repricing rule.
     */
    merchantId?: string;
    /**
     * Represents whether a rule is paused. A paused rule will behave like a non-paused rule within CRUD operations, with the major difference that a paused rule will not be evaluated and will have no effect on offers.
     */
    paused?: boolean;
    /**
     * Definition of a rule restriction. At least one of the following needs to be true: (1) use_auto_pricing_min_price is true (2) floor.price_delta exists (3) floor.percentage_delta exists If floor.price_delta and floor.percentage_delta are both set on a rule, the highest value will be chosen by the Repricer. In other words, for a product with a price of $50, if the `floor.percentage_delta` is "-10" and the floor.price_delta is "-12", the offer price will only be lowered $5 (10% lower than the original offer price).
     */
    restriction?: RepricingRuleRestriction;
    /**
     * Output only. Immutable. The ID to uniquely identify each repricing rule.
     */
    ruleId?: string;
    /**
     * Definition of stats based rule.
     */
    statsBasedRule?: RepricingRuleStatsBasedRule;
    /**
     * The title for the rule.
     */
    title?: string;
    /**
     * Required. Immutable. The type of the rule.
     */
    type?: RepricingRuleTypeEnum;
}
