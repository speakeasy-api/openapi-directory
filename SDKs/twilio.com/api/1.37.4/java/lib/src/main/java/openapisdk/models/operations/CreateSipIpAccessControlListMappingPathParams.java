package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class CreateSipIpAccessControlListMappingPathParams {
    @SpeakeasyMetadata("pathParam:style=simple,explode=false,name=AccountSid")
    public String accountSid;
    public CreateSipIpAccessControlListMappingPathParams withAccountSid(String accountSid) {
        this.accountSid = accountSid;
        return this;
    }
    @SpeakeasyMetadata("pathParam:style=simple,explode=false,name=DomainSid")
    public String domainSid;
    public CreateSipIpAccessControlListMappingPathParams withDomainSid(String domainSid) {
        this.domainSid = domainSid;
        return this;
    }
}