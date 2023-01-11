package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class DeleteSipIpAccessControlListMappingPathParams {
    @SpeakeasyMetadata("pathParam:style=simple,explode=false,name=AccountSid")
    public String accountSid;
    public DeleteSipIpAccessControlListMappingPathParams withAccountSid(String accountSid) {
        this.accountSid = accountSid;
        return this;
    }
    @SpeakeasyMetadata("pathParam:style=simple,explode=false,name=DomainSid")
    public String domainSid;
    public DeleteSipIpAccessControlListMappingPathParams withDomainSid(String domainSid) {
        this.domainSid = domainSid;
        return this;
    }
    @SpeakeasyMetadata("pathParam:style=simple,explode=false,name=Sid")
    public String sid;
    public DeleteSipIpAccessControlListMappingPathParams withSid(String sid) {
        this.sid = sid;
        return this;
    }
}