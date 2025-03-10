/* 
 * Code generated by Speakeasy (https://speakeasyapi.dev). DO NOT EDIT.
 */

package org.openapis.openapi.models.shared;

import com.fasterxml.jackson.annotation.JsonValue;

/**
 * GooglePrivacyDlpV2MetadataLocationTypeEnum - Type of metadata containing the finding.
 */
public enum GooglePrivacyDlpV2MetadataLocationTypeEnum {
    METADATATYPE_UNSPECIFIED("METADATATYPE_UNSPECIFIED"),
    STORAGE_METADATA("STORAGE_METADATA");

    @JsonValue
    public final String value;

    private GooglePrivacyDlpV2MetadataLocationTypeEnum(String value) {
        this.value = value;
    }
}
