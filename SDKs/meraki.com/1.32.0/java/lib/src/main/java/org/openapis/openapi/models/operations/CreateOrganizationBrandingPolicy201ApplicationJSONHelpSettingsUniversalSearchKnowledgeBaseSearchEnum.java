/* 
 * Code generated by Speakeasy (https://speakeasyapi.dev). DO NOT EDIT.
 */

package org.openapis.openapi.models.operations;

import com.fasterxml.jackson.annotation.JsonValue;

/**
 * CreateOrganizationBrandingPolicy201ApplicationJSONHelpSettingsUniversalSearchKnowledgeBaseSearchEnum -       The universal search box always visible on Dashboard will, by default, present results from the Meraki KB. This configures
 *       whether these Meraki KB results should be returned. Can be one of 'default or inherit', 'hide' or 'show'.
 * 
 */
public enum CreateOrganizationBrandingPolicy201ApplicationJSONHelpSettingsUniversalSearchKnowledgeBaseSearchEnum {
    DEFAULT_OR_INHERIT("default or inherit"),
    HIDE("hide"),
    SHOW("show");

    @JsonValue
    public final String value;

    private CreateOrganizationBrandingPolicy201ApplicationJSONHelpSettingsUniversalSearchKnowledgeBaseSearchEnum(String value) {
        this.value = value;
    }
}
