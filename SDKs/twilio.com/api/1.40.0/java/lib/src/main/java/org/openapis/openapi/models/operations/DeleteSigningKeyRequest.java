/* 
 * Code generated by Speakeasy (https://speakeasyapi.dev). DO NOT EDIT.
 */

package org.openapis.openapi.models.operations;

import org.openapis.openapi.utils.SpeakeasyMetadata;

public class DeleteSigningKeyRequest {
    @SpeakeasyMetadata("pathParam:style=simple,explode=false,name=AccountSid")
    public String accountSid;
    public DeleteSigningKeyRequest withAccountSid(String accountSid) {
        this.accountSid = accountSid;
        return this;
    }
    
    @SpeakeasyMetadata("pathParam:style=simple,explode=false,name=Sid")
    public String sid;
    public DeleteSigningKeyRequest withSid(String sid) {
        this.sid = sid;
        return this;
    }
    
}
