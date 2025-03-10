/* 
 * Code generated by Speakeasy (https://speakeasyapi.dev). DO NOT EDIT.
 */

package org.openapis.openapi.models.operations;

import com.fasterxml.jackson.annotation.JsonProperty;
import org.openapis.openapi.utils.SpeakeasyMetadata;

public class GetResourcesMediaIdContentRequest {
    /**
     * The method that called this method
     */
    @SpeakeasyMetadata("queryParam:style=form,explode=false,name=calledByBuild")
    public Boolean calledByBuild;

    public GetResourcesMediaIdContentRequest withCalledByBuild(Boolean calledByBuild) {
        this.calledByBuild = calledByBuild;
        return this;
    }
    
    /**
     * The id of the media to show content for.
     */
    @SpeakeasyMetadata("pathParam:style=simple,explode=false,name=id")
    public Long id;

    public GetResourcesMediaIdContentRequest withId(Long id) {
        this.id = id;
        return this;
    }
    
    public GetResourcesMediaIdContentRequest(@JsonProperty("id") Long id) {
        this.id = id;
  }
}
