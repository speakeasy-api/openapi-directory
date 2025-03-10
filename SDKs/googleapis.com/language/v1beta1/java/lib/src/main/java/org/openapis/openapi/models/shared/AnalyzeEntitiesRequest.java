/* 
 * Code generated by Speakeasy (https://speakeasyapi.dev). DO NOT EDIT.
 */

package org.openapis.openapi.models.shared;

import com.fasterxml.jackson.annotation.JsonInclude.Include;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonProperty;

/**
 * AnalyzeEntitiesRequest - The entity analysis request message.
 */
public class AnalyzeEntitiesRequest {
    /**
     * Represents the input to API methods.
     */
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("document")
    public Document document;

    public AnalyzeEntitiesRequest withDocument(Document document) {
        this.document = document;
        return this;
    }
    
    /**
     * The encoding type used by the API to calculate offsets.
     */
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("encodingType")
    public AnalyzeEntitiesRequestEncodingTypeEnum encodingType;

    public AnalyzeEntitiesRequest withEncodingType(AnalyzeEntitiesRequestEncodingTypeEnum encodingType) {
        this.encodingType = encodingType;
        return this;
    }
    
    public AnalyzeEntitiesRequest(){}
}
