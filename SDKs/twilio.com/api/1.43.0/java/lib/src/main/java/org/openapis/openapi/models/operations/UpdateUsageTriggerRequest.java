/* 
 * Code generated by Speakeasy (https://speakeasyapi.dev). DO NOT EDIT.
 */

package org.openapis.openapi.models.operations;

import com.fasterxml.jackson.annotation.JsonProperty;
import org.openapis.openapi.utils.SpeakeasyMetadata;

public class UpdateUsageTriggerRequest {
    /**
     * The SID of the [Account](https://www.twilio.com/docs/iam/api/account) that created the UsageTrigger resources to update.
     */
    @SpeakeasyMetadata("pathParam:style=simple,explode=false,name=AccountSid")
    public String accountSid;

    public UpdateUsageTriggerRequest withAccountSid(String accountSid) {
        this.accountSid = accountSid;
        return this;
    }
    
    @SpeakeasyMetadata("request:mediaType=application/x-www-form-urlencoded")
    public UpdateUsageTriggerUpdateUsageTriggerRequest requestBody;

    public UpdateUsageTriggerRequest withRequestBody(UpdateUsageTriggerUpdateUsageTriggerRequest requestBody) {
        this.requestBody = requestBody;
        return this;
    }
    
    /**
     * The Twilio-provided string that uniquely identifies the UsageTrigger resource to update.
     */
    @SpeakeasyMetadata("pathParam:style=simple,explode=false,name=Sid")
    public String sid;

    public UpdateUsageTriggerRequest withSid(String sid) {
        this.sid = sid;
        return this;
    }
    
    public UpdateUsageTriggerRequest(@JsonProperty("AccountSid") String accountSid, @JsonProperty("Sid") String sid) {
        this.accountSid = accountSid;
        this.sid = sid;
  }
}
