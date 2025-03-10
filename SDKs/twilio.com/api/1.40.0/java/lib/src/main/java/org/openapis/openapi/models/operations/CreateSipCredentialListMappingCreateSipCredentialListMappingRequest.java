/* 
 * Code generated by Speakeasy (https://speakeasyapi.dev). DO NOT EDIT.
 */

package org.openapis.openapi.models.operations;

import org.openapis.openapi.utils.SpeakeasyMetadata;

public class CreateSipCredentialListMappingCreateSipCredentialListMappingRequest {
    /**
     * A 34 character string that uniquely identifies the CredentialList resource to map to the SIP domain.
     */
    @SpeakeasyMetadata("form:name=CredentialListSid")
    public String credentialListSid;
    public CreateSipCredentialListMappingCreateSipCredentialListMappingRequest withCredentialListSid(String credentialListSid) {
        this.credentialListSid = credentialListSid;
        return this;
    }
    
}
