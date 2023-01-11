package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class DeleteSipCredentialListMappingPathParams {
    @SpeakeasyMetadata("pathParam:style=simple,explode=false,name=AccountSid")
    public String accountSid;
    public DeleteSipCredentialListMappingPathParams withAccountSid(String accountSid) {
        this.accountSid = accountSid;
        return this;
    }
    @SpeakeasyMetadata("pathParam:style=simple,explode=false,name=DomainSid")
    public String domainSid;
    public DeleteSipCredentialListMappingPathParams withDomainSid(String domainSid) {
        this.domainSid = domainSid;
        return this;
    }
    @SpeakeasyMetadata("pathParam:style=simple,explode=false,name=Sid")
    public String sid;
    public DeleteSipCredentialListMappingPathParams withSid(String sid) {
        this.sid = sid;
        return this;
    }
}