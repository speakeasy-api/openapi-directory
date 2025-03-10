/* 
 * Code generated by Speakeasy (https://speakeasyapi.dev). DO NOT EDIT.
 */

package org.openapis.openapi.models.operations;

import org.openapis.openapi.utils.SpeakeasyMetadata;

public class FetchCallFeedbackRequest {
    /**
     * The unique id of the [Account](https://www.twilio.com/docs/iam/api/account) responsible for this resource.
     */
    @SpeakeasyMetadata("pathParam:style=simple,explode=false,name=AccountSid")
    public String accountSid;
    public FetchCallFeedbackRequest withAccountSid(String accountSid) {
        this.accountSid = accountSid;
        return this;
    }
    
    /**
     * The call sid that uniquely identifies the call
     */
    @SpeakeasyMetadata("pathParam:style=simple,explode=false,name=CallSid")
    public String callSid;
    public FetchCallFeedbackRequest withCallSid(String callSid) {
        this.callSid = callSid;
        return this;
    }
    
}
