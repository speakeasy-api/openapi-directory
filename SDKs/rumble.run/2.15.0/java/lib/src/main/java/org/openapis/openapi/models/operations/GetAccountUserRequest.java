/* 
 * Code generated by Speakeasy (https://speakeasyapi.dev). DO NOT EDIT.
 */

package org.openapis.openapi.models.operations;

import com.fasterxml.jackson.annotation.JsonProperty;
import org.openapis.openapi.utils.SpeakeasyMetadata;

public class GetAccountUserRequest {
    /**
     * UUID of the user to retrieve
     */
    @SpeakeasyMetadata("pathParam:style=simple,explode=false,name=user_id")
    public String userId;

    public GetAccountUserRequest withUserId(String userId) {
        this.userId = userId;
        return this;
    }
    
    public GetAccountUserRequest(@JsonProperty("user_id") String userId) {
        this.userId = userId;
  }
}
