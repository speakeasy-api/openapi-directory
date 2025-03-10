/* 
 * Code generated by Speakeasy (https://speakeasyapi.dev). DO NOT EDIT.
 */

package org.openapis.openapi.models.shared;

import com.fasterxml.jackson.annotation.JsonInclude.Include;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonProperty;

/**
 * GoogleCloudDialogflowV2beta1SuggestionFeature - The type of Human Agent Assistant API suggestion to perform, and the maximum number of results to return for that type. Multiple `Feature` objects can be specified in the `features` list.
 */
public class GoogleCloudDialogflowV2beta1SuggestionFeature {
    /**
     * Type of Human Agent Assistant API feature to request.
     */
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("type")
    public GoogleCloudDialogflowV2beta1SuggestionFeatureTypeEnum type;

    public GoogleCloudDialogflowV2beta1SuggestionFeature withType(GoogleCloudDialogflowV2beta1SuggestionFeatureTypeEnum type) {
        this.type = type;
        return this;
    }
    
    public GoogleCloudDialogflowV2beta1SuggestionFeature(){}
}
