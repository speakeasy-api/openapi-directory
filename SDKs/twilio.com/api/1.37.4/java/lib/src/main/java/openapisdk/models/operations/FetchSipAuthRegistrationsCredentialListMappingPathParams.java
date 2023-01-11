package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class FetchSipAuthRegistrationsCredentialListMappingPathParams {
    @SpeakeasyMetadata("pathParam:style=simple,explode=false,name=AccountSid")
    public String accountSid;
    public FetchSipAuthRegistrationsCredentialListMappingPathParams withAccountSid(String accountSid) {
        this.accountSid = accountSid;
        return this;
    }
    @SpeakeasyMetadata("pathParam:style=simple,explode=false,name=DomainSid")
    public String domainSid;
    public FetchSipAuthRegistrationsCredentialListMappingPathParams withDomainSid(String domainSid) {
        this.domainSid = domainSid;
        return this;
    }
    @SpeakeasyMetadata("pathParam:style=simple,explode=false,name=Sid")
    public String sid;
    public FetchSipAuthRegistrationsCredentialListMappingPathParams withSid(String sid) {
        this.sid = sid;
        return this;
    }
}