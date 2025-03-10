/* 
 * Code generated by Speakeasy (https://speakeasyapi.dev). DO NOT EDIT.
 */

package org.openapis.openapi.models.operations;

import com.fasterxml.jackson.annotation.JsonProperty;
import org.openapis.openapi.utils.SpeakeasyMetadata;

public class FetchRendersRequest {
    /**
     * One or more render IDs
     */
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=id")
    public String[] id;

    public FetchRendersRequest withId(String[] id) {
        this.id = id;
        return this;
    }
    
    public FetchRendersRequest(@JsonProperty("id") String[] id) {
        this.id = id;
  }
}
