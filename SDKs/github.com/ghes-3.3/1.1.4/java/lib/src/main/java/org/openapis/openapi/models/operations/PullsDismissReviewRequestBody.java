/* 
 * Code generated by Speakeasy (https://speakeasyapi.dev). DO NOT EDIT.
 */

package org.openapis.openapi.models.operations;

import com.fasterxml.jackson.annotation.JsonInclude.Include;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonProperty;

public class PullsDismissReviewRequestBody {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("event")
    public PullsDismissReviewRequestBodyEventEnum event;

    public PullsDismissReviewRequestBody withEvent(PullsDismissReviewRequestBodyEventEnum event) {
        this.event = event;
        return this;
    }
    
    /**
     * The message for the pull request review dismissal
     */
    @JsonProperty("message")
    public String message;

    public PullsDismissReviewRequestBody withMessage(String message) {
        this.message = message;
        return this;
    }
    
    public PullsDismissReviewRequestBody(@JsonProperty("message") String message) {
        this.message = message;
  }
}
