package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class CreateSipAuthRegistrationsCredentialListMappingPathParams {
    @SpeakeasyMetadata("pathParam:style=simple,explode=false,name=AccountSid")
    public String accountSid;
    public CreateSipAuthRegistrationsCredentialListMappingPathParams withAccountSid(String accountSid) {
        this.accountSid = accountSid;
        return this;
    }
    @SpeakeasyMetadata("pathParam:style=simple,explode=false,name=DomainSid")
    public String domainSid;
    public CreateSipAuthRegistrationsCredentialListMappingPathParams withDomainSid(String domainSid) {
        this.domainSid = domainSid;
        return this;
    }
}