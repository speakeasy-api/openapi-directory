/* 
 * Code generated by Speakeasy (https://speakeasyapi.dev). DO NOT EDIT.
 */

package org.openapis.openapi.models.operations;

import com.fasterxml.jackson.annotation.JsonProperty;
import org.openapis.openapi.utils.SpeakeasyMetadata;

public class FetchConnectAppRequest {
    /**
     * The SID of the [Account](https://www.twilio.com/docs/iam/api/account) that created the ConnectApp resource to fetch.
     */
    @SpeakeasyMetadata("pathParam:style=simple,explode=false,name=AccountSid")
    public String accountSid;

    public FetchConnectAppRequest withAccountSid(String accountSid) {
        this.accountSid = accountSid;
        return this;
    }
    
    /**
     * The Twilio-provided string that uniquely identifies the ConnectApp resource to fetch.
     */
    @SpeakeasyMetadata("pathParam:style=simple,explode=false,name=Sid")
    public String sid;

    public FetchConnectAppRequest withSid(String sid) {
        this.sid = sid;
        return this;
    }
    
    public FetchConnectAppRequest(@JsonProperty("AccountSid") String accountSid, @JsonProperty("Sid") String sid) {
        this.accountSid = accountSid;
        this.sid = sid;
  }
}
