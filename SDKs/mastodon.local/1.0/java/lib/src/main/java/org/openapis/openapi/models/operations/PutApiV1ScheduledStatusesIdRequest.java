/* 
 * Code generated by Speakeasy (https://speakeasyapi.dev). DO NOT EDIT.
 */

package org.openapis.openapi.models.operations;

import com.fasterxml.jackson.annotation.JsonProperty;
import org.openapis.openapi.utils.SpeakeasyMetadata;

public class PutApiV1ScheduledStatusesIdRequest {
    @SpeakeasyMetadata("request:mediaType=application/json")
    public PutApiV1ScheduledStatusesIdRequestBody requestBody;

    public PutApiV1ScheduledStatusesIdRequest withRequestBody(PutApiV1ScheduledStatusesIdRequestBody requestBody) {
        this.requestBody = requestBody;
        return this;
    }
    
    /**
     * ID of the scheduled status in the database.
     */
    @SpeakeasyMetadata("pathParam:style=simple,explode=false,name=id")
    public String id;

    public PutApiV1ScheduledStatusesIdRequest withId(String id) {
        this.id = id;
        return this;
    }
    
    public PutApiV1ScheduledStatusesIdRequest(@JsonProperty("id") String id) {
        this.id = id;
  }
}
