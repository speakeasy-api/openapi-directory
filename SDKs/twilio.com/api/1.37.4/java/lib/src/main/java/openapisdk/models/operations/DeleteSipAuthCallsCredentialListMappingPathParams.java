package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class DeleteSipAuthCallsCredentialListMappingPathParams {
    @SpeakeasyMetadata("pathParam:style=simple,explode=false,name=AccountSid")
    public String accountSid;
    public DeleteSipAuthCallsCredentialListMappingPathParams withAccountSid(String accountSid) {
        this.accountSid = accountSid;
        return this;
    }
    @SpeakeasyMetadata("pathParam:style=simple,explode=false,name=DomainSid")
    public String domainSid;
    public DeleteSipAuthCallsCredentialListMappingPathParams withDomainSid(String domainSid) {
        this.domainSid = domainSid;
        return this;
    }
    @SpeakeasyMetadata("pathParam:style=simple,explode=false,name=Sid")
    public String sid;
    public DeleteSipAuthCallsCredentialListMappingPathParams withSid(String sid) {
        this.sid = sid;
        return this;
    }
}