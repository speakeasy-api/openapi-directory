/* 
 * Code generated by Speakeasy (https://speakeasyapi.dev). DO NOT EDIT.
 */

package org.openapis.openapi.models.shared;

import com.fasterxml.jackson.annotation.JsonInclude.Include;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonProperty;

/**
 * GoogleCloudVisionV1p1beta1Feature - The type of Google Cloud Vision API detection to perform, and the maximum number of results to return for that type. Multiple `Feature` objects can be specified in the `features` list.
 */
public class GoogleCloudVisionV1p1beta1Feature {
    /**
     * Maximum number of results of this type. Does not apply to `TEXT_DETECTION`, `DOCUMENT_TEXT_DETECTION`, or `CROP_HINTS`.
     */
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("maxResults")
    public Integer maxResults;

    public GoogleCloudVisionV1p1beta1Feature withMaxResults(Integer maxResults) {
        this.maxResults = maxResults;
        return this;
    }
    
    /**
     * Model to use for the feature. Supported values: "builtin/stable" (the default if unset) and "builtin/latest". `DOCUMENT_TEXT_DETECTION` and `TEXT_DETECTION` also support "builtin/weekly" for the bleeding edge release updated weekly.
     */
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("model")
    public String model;

    public GoogleCloudVisionV1p1beta1Feature withModel(String model) {
        this.model = model;
        return this;
    }
    
    /**
     * The feature type.
     */
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("type")
    public GoogleCloudVisionV1p1beta1FeatureTypeEnum type;

    public GoogleCloudVisionV1p1beta1Feature withType(GoogleCloudVisionV1p1beta1FeatureTypeEnum type) {
        this.type = type;
        return this;
    }
    
    public GoogleCloudVisionV1p1beta1Feature(){}
}
