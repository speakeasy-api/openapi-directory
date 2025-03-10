/* 
 * Code generated by Speakeasy (https://speakeasyapi.dev). DO NOT EDIT.
 */

package org.openapis.openapi.models.operations;

import com.fasterxml.jackson.annotation.JsonProperty;
import org.openapis.openapi.utils.SpeakeasyMetadata;

public class FetchHealthProfileQuestionRequest {
    /**
     * Health profile question identifier
     */
    @SpeakeasyMetadata("pathParam:style=simple,explode=false,name=id")
    public String id;

    public FetchHealthProfileQuestionRequest withId(String id) {
        this.id = id;
        return this;
    }
    
    /**
     * List of related resources to include in the response
     */
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=include")
    public FetchHealthProfileQuestionIncludeEnum include;

    public FetchHealthProfileQuestionRequest withInclude(FetchHealthProfileQuestionIncludeEnum include) {
        this.include = include;
        return this;
    }
    
    public FetchHealthProfileQuestionRequest(@JsonProperty("id") String id) {
        this.id = id;
  }
}
