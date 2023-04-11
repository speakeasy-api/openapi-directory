import { SpeakeasyBase } from "../../../internal/utils";
/**
 * Comparison operator of this term. This field is only relevant when type is left unset or set to CUSTOM_VARIABLE_TERM or REFERRER_TERM.
 */
export declare enum ListPopulationTermOperatorEnum {
    NumEquals = "NUM_EQUALS",
    NumLessThan = "NUM_LESS_THAN",
    NumLessThanEqual = "NUM_LESS_THAN_EQUAL",
    NumGreaterThan = "NUM_GREATER_THAN",
    NumGreaterThanEqual = "NUM_GREATER_THAN_EQUAL",
    StringEquals = "STRING_EQUALS",
    StringContains = "STRING_CONTAINS"
}
/**
 * List population term type determines the applicable fields in this object. If left unset or set to CUSTOM_VARIABLE_TERM, then variableName, variableFriendlyName, operator, value, and negation are applicable. If set to LIST_MEMBERSHIP_TERM then remarketingListId and contains are applicable. If set to REFERRER_TERM then operator, value, and negation are applicable.
 */
export declare enum ListPopulationTermTypeEnum {
    CustomVariableTerm = "CUSTOM_VARIABLE_TERM",
    ListMembershipTerm = "LIST_MEMBERSHIP_TERM",
    ReferrerTerm = "REFERRER_TERM"
}
/**
 * Remarketing List Population Rule Term.
 */
export declare class ListPopulationTerm extends SpeakeasyBase {
    /**
     * Will be true if the term should check if the user is in the list and false if the term should check if the user is not in the list. This field is only relevant when type is set to LIST_MEMBERSHIP_TERM. False by default.
     */
    contains?: boolean;
    /**
     * Whether to negate the comparison result of this term during rule evaluation. This field is only relevant when type is left unset or set to CUSTOM_VARIABLE_TERM or REFERRER_TERM.
     */
    negation?: boolean;
    /**
     * Comparison operator of this term. This field is only relevant when type is left unset or set to CUSTOM_VARIABLE_TERM or REFERRER_TERM.
     */
    operator?: ListPopulationTermOperatorEnum;
    /**
     * ID of the list in question. This field is only relevant when type is set to LIST_MEMBERSHIP_TERM.
     */
    remarketingListId?: string;
    /**
     * List population term type determines the applicable fields in this object. If left unset or set to CUSTOM_VARIABLE_TERM, then variableName, variableFriendlyName, operator, value, and negation are applicable. If set to LIST_MEMBERSHIP_TERM then remarketingListId and contains are applicable. If set to REFERRER_TERM then operator, value, and negation are applicable.
     */
    type?: ListPopulationTermTypeEnum;
    /**
     * Literal to compare the variable to. This field is only relevant when type is left unset or set to CUSTOM_VARIABLE_TERM or REFERRER_TERM.
     */
    value?: string;
    /**
     * Friendly name of this term's variable. This is a read-only, auto-generated field. This field is only relevant when type is left unset or set to CUSTOM_VARIABLE_TERM.
     */
    variableFriendlyName?: string;
    /**
     * Name of the variable (U1, U2, etc.) being compared in this term. This field is only relevant when type is set to null, CUSTOM_VARIABLE_TERM or REFERRER_TERM.
     */
    variableName?: string;
}
