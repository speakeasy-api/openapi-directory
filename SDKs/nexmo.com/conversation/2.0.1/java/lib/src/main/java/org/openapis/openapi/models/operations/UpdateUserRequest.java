/* 
 * Code generated by Speakeasy (https://speakeasyapi.dev). DO NOT EDIT.
 */

package org.openapis.openapi.models.operations;

import com.fasterxml.jackson.annotation.JsonProperty;
import org.openapis.openapi.utils.SpeakeasyMetadata;

public class UpdateUserRequest {
    @SpeakeasyMetadata("request:mediaType=application/json")
    public UpdateUserRequestBody requestBody;

    public UpdateUserRequest withRequestBody(UpdateUserRequestBody requestBody) {
        this.requestBody = requestBody;
        return this;
    }
    
    /**
     * User ID
     */
    @SpeakeasyMetadata("pathParam:style=simple,explode=false,name=user_id")
    public String userId;

    public UpdateUserRequest withUserId(String userId) {
        this.userId = userId;
        return this;
    }
    
    public UpdateUserRequest(@JsonProperty("user_id") String userId) {
        this.userId = userId;
  }
}
