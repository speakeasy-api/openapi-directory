/* 
 * Code generated by Speakeasy (https://speakeasyapi.dev). DO NOT EDIT.
 */

package org.openapis.openapi.models.shared;

import com.fasterxml.jackson.annotation.JsonInclude.Include;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonProperty;

/**
 * CommonLanguageSettings - Required information for every language.
 */
public class CommonLanguageSettings {
    /**
     * The destination where API teams want this client library to be published.
     */
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("destinations")
    public CommonLanguageSettingsDestinationsEnum[] destinations;

    public CommonLanguageSettings withDestinations(CommonLanguageSettingsDestinationsEnum[] destinations) {
        this.destinations = destinations;
        return this;
    }
    
    /**
     * Link to automatically generated reference documentation. Example: https://cloud.google.com/nodejs/docs/reference/asset/latest
     */
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("referenceDocsUri")
    public String referenceDocsUri;

    public CommonLanguageSettings withReferenceDocsUri(String referenceDocsUri) {
        this.referenceDocsUri = referenceDocsUri;
        return this;
    }
    
    public CommonLanguageSettings(){}
}
