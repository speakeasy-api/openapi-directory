/* 
 * Code generated by Speakeasy (https://speakeasyapi.dev). DO NOT EDIT.
 */

package org.openapis.openapi.models.shared;

import com.fasterxml.jackson.annotation.JsonValue;

/**
 * ComputeEnginePreferencesLicenseTypeEnum - License type to consider when calculating costs for virtual machine insights and recommendations. If unspecified, costs are calculated based on the default licensing plan.
 */
public enum ComputeEnginePreferencesLicenseTypeEnum {
    LICENSE_TYPE_UNSPECIFIED("LICENSE_TYPE_UNSPECIFIED"),
    LICENSE_TYPE_DEFAULT("LICENSE_TYPE_DEFAULT"),
    LICENSE_TYPE_BRING_YOUR_OWN_LICENSE("LICENSE_TYPE_BRING_YOUR_OWN_LICENSE");

    @JsonValue
    public final String value;

    private ComputeEnginePreferencesLicenseTypeEnum(String value) {
        this.value = value;
    }
}
