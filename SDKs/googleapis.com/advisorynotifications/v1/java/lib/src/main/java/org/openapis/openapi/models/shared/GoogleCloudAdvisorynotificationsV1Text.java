/* 
 * Code generated by Speakeasy (https://speakeasyapi.dev). DO NOT EDIT.
 */

package org.openapis.openapi.models.shared;

import com.fasterxml.jackson.annotation.JsonInclude.Include;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonProperty;

/**
 * GoogleCloudAdvisorynotificationsV1Text - A text object containing the English text and its localized copies.
 */
public class GoogleCloudAdvisorynotificationsV1Text {
    /**
     * The English copy.
     */
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("enText")
    public String enText;

    public GoogleCloudAdvisorynotificationsV1Text withEnText(String enText) {
        this.enText = enText;
        return this;
    }
    
    /**
     * Status of the localization.
     */
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("localizationState")
    public GoogleCloudAdvisorynotificationsV1TextLocalizationStateEnum localizationState;

    public GoogleCloudAdvisorynotificationsV1Text withLocalizationState(GoogleCloudAdvisorynotificationsV1TextLocalizationStateEnum localizationState) {
        this.localizationState = localizationState;
        return this;
    }
    
    /**
     * The requested localized copy (if applicable).
     */
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("localizedText")
    public String localizedText;

    public GoogleCloudAdvisorynotificationsV1Text withLocalizedText(String localizedText) {
        this.localizedText = localizedText;
        return this;
    }
    
    public GoogleCloudAdvisorynotificationsV1Text(){}
}
