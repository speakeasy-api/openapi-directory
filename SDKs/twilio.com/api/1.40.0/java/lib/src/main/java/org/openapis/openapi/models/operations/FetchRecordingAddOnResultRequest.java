/* 
 * Code generated by Speakeasy (https://speakeasyapi.dev). DO NOT EDIT.
 */

package org.openapis.openapi.models.operations;

import org.openapis.openapi.utils.SpeakeasyMetadata;

public class FetchRecordingAddOnResultRequest {
    /**
     * The SID of the [Account](https://www.twilio.com/docs/iam/api/account) that created the Recording AddOnResult resource to fetch.
     */
    @SpeakeasyMetadata("pathParam:style=simple,explode=false,name=AccountSid")
    public String accountSid;
    public FetchRecordingAddOnResultRequest withAccountSid(String accountSid) {
        this.accountSid = accountSid;
        return this;
    }
    
    /**
     * The SID of the recording to which the result to fetch belongs.
     */
    @SpeakeasyMetadata("pathParam:style=simple,explode=false,name=ReferenceSid")
    public String referenceSid;
    public FetchRecordingAddOnResultRequest withReferenceSid(String referenceSid) {
        this.referenceSid = referenceSid;
        return this;
    }
    
    /**
     * The Twilio-provided string that uniquely identifies the Recording AddOnResult resource to fetch.
     */
    @SpeakeasyMetadata("pathParam:style=simple,explode=false,name=Sid")
    public String sid;
    public FetchRecordingAddOnResultRequest withSid(String sid) {
        this.sid = sid;
        return this;
    }
    
}
