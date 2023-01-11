package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class DeleteDomainCertV4PathParams {
    @SpeakeasyMetadata("pathParam:style=simple,explode=false,name=DomainSid")
    public String domainSid;
    public DeleteDomainCertV4PathParams withDomainSid(String domainSid) {
        this.domainSid = domainSid;
        return this;
    }
}