/* 
 * Code generated by Speakeasy (https://speakeasyapi.dev). DO NOT EDIT.
 */

package org.openapis.openapi.models.operations;

import com.fasterxml.jackson.annotation.JsonProperty;
import org.openapis.openapi.utils.SpeakeasyMetadata;

public class ActivityGetThreadRequest {
    /**
     * The unique identifier of the notification thread. This corresponds to the value returned in the `id` field when you retrieve notifications (for example with the [`GET /notifications` operation](https://docs.github.com/enterprise-server@3.3/rest/reference/activity#list-notifications-for-the-authenticated-user)).
     */
    @SpeakeasyMetadata("pathParam:style=simple,explode=false,name=thread_id")
    public Long threadId;

    public ActivityGetThreadRequest withThreadId(Long threadId) {
        this.threadId = threadId;
        return this;
    }
    
    public ActivityGetThreadRequest(@JsonProperty("thread_id") Long threadId) {
        this.threadId = threadId;
  }
}
