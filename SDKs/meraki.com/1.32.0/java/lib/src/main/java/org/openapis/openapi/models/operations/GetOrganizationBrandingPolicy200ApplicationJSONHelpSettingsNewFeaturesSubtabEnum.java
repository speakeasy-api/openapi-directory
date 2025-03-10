/* 
 * Code generated by Speakeasy (https://speakeasyapi.dev). DO NOT EDIT.
 */

package org.openapis.openapi.models.operations;

import com.fasterxml.jackson.annotation.JsonValue;

/**
 * GetOrganizationBrandingPolicy200ApplicationJSONHelpSettingsNewFeaturesSubtabEnum -       The 'Help -&gt; New features' subtab where new Dashboard features are detailed. Can be one of 'default or inherit', 'hide' or 'show'.
 * 
 */
public enum GetOrganizationBrandingPolicy200ApplicationJSONHelpSettingsNewFeaturesSubtabEnum {
    DEFAULT_OR_INHERIT("default or inherit"),
    HIDE("hide"),
    SHOW("show");

    @JsonValue
    public final String value;

    private GetOrganizationBrandingPolicy200ApplicationJSONHelpSettingsNewFeaturesSubtabEnum(String value) {
        this.value = value;
    }
}
