/* 
 * Code generated by Speakeasy (https://speakeasyapi.dev). DO NOT EDIT.
 */

package org.openapis.openapi.models.shared;

import com.fasterxml.jackson.annotation.JsonInclude.Include;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonProperty;

/**
 * CreateActionResponse - OK
 */
public class CreateActionResponse {
    @JsonProperty("data")
    public ActionResource data;

    public CreateActionResponse withData(ActionResource data) {
        this.data = data;
        return this;
    }
    
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("meta")
    public CreateOrUpdateMetaResponse meta;

    public CreateActionResponse withMeta(CreateOrUpdateMetaResponse meta) {
        this.meta = meta;
        return this;
    }
    
    public CreateActionResponse(@JsonProperty("data") ActionResource data) {
        this.data = data;
  }
}
