/* 
 * Code generated by Speakeasy (https://speakeasyapi.dev). DO NOT EDIT.
 */

package org.openapis.openapi.models.operations;

import org.openapis.openapi.utils.SpeakeasyMetadata;

public class FetchCredentialRequest {
    /**
     * The SID of the Credential resource to fetch.
     */
    @SpeakeasyMetadata("pathParam:style=simple,explode=false,name=Sid")
    public String sid;
    public FetchCredentialRequest withSid(String sid) {
        this.sid = sid;
        return this;
    }
    
}
