/* 
 * Code generated by Speakeasy (https://speakeasyapi.dev). DO NOT EDIT.
 */

package org.openapis.openapi.models.operations;

import org.openapis.openapi.utils.SpeakeasyMetadata;

public class DeleteMediaRequest {
    /**
     * The SID of the [Account](https://www.twilio.com/docs/iam/api/account) that created the Media resource(s) to delete.
     */
    @SpeakeasyMetadata("pathParam:style=simple,explode=false,name=AccountSid")
    public String accountSid;
    public DeleteMediaRequest withAccountSid(String accountSid) {
        this.accountSid = accountSid;
        return this;
    }
    
    /**
     * The SID of the Message resource that this Media resource belongs to.
     */
    @SpeakeasyMetadata("pathParam:style=simple,explode=false,name=MessageSid")
    public String messageSid;
    public DeleteMediaRequest withMessageSid(String messageSid) {
        this.messageSid = messageSid;
        return this;
    }
    
    /**
     * The Twilio-provided string that uniquely identifies the Media resource to delete
     */
    @SpeakeasyMetadata("pathParam:style=simple,explode=false,name=Sid")
    public String sid;
    public DeleteMediaRequest withSid(String sid) {
        this.sid = sid;
        return this;
    }
    
}
