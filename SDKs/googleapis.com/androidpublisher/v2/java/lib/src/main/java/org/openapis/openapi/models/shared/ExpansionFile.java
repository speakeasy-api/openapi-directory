/* 
 * Code generated by Speakeasy (https://speakeasyapi.dev). DO NOT EDIT.
 */

package org.openapis.openapi.models.shared;

import com.fasterxml.jackson.annotation.JsonInclude.Include;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonProperty;

/**
 * ExpansionFile - Successful response
 */
public class ExpansionFile {
    /**
     * If set this field indicates that this APK has an Expansion File uploaded to it: this APK does not reference another APK's Expansion File. The field's value is the size of the uploaded Expansion File in bytes.
     */
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("fileSize")
    public String fileSize;

    public ExpansionFile withFileSize(String fileSize) {
        this.fileSize = fileSize;
        return this;
    }
    
    /**
     * If set this APK's Expansion File references another APK's Expansion File. The file_size field will not be set.
     */
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("referencesVersion")
    public Integer referencesVersion;

    public ExpansionFile withReferencesVersion(Integer referencesVersion) {
        this.referencesVersion = referencesVersion;
        return this;
    }
    
    public ExpansionFile(){}
}
