/* 
 * Code generated by Speakeasy (https://speakeasyapi.dev). DO NOT EDIT.
 */

package org.openapis.openapi.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;

public class RequestReference {
    /**
     * the requestId that was passed
     */
    @JsonProperty("requestId")
    public String requestId;

    public RequestReference withRequestId(String requestId) {
        this.requestId = requestId;
        return this;
    }
    
    public RequestReference(@JsonProperty("requestId") String requestId) {
        this.requestId = requestId;
  }
}
