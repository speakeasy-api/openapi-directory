/* 
 * Code generated by Speakeasy (https://speakeasyapi.dev). DO NOT EDIT.
 */

package org.openapis.openapi.models.shared;

import com.fasterxml.jackson.annotation.JsonValue;

/**
 * ListPopulationTermTypeEnum - List population term type determines the applicable fields in this object. If left unset or set to CUSTOM_VARIABLE_TERM, then variableName, variableFriendlyName, operator, value, and negation are applicable. If set to LIST_MEMBERSHIP_TERM then remarketingListId and contains are applicable. If set to REFERRER_TERM then operator, value, and negation are applicable.
 */
public enum ListPopulationTermTypeEnum {
    CUSTOM_VARIABLE_TERM("CUSTOM_VARIABLE_TERM"),
    LIST_MEMBERSHIP_TERM("LIST_MEMBERSHIP_TERM"),
    REFERRER_TERM("REFERRER_TERM");

    @JsonValue
    public final String value;

    private ListPopulationTermTypeEnum(String value) {
        this.value = value;
    }
}
