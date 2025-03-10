/* 
 * Code generated by Speakeasy (https://speakeasyapi.dev). DO NOT EDIT.
 */

package org.openapis.openapi.models.shared;

import com.fasterxml.jackson.annotation.JsonInclude.Include;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonProperty;

/**
 * CreateLineResponse - The result of creating a line.
 */
public class CreateLineResponse {
    /**
     * The object ID of the created line.
     */
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("objectId")
    public String objectId;

    public CreateLineResponse withObjectId(String objectId) {
        this.objectId = objectId;
        return this;
    }
    
    public CreateLineResponse(){}
}
