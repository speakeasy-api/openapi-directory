package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class UpdateDomainCertV4PathParams {
    @SpeakeasyMetadata("pathParam:style=simple,explode=false,name=DomainSid")
    public String domainSid;
    public UpdateDomainCertV4PathParams withDomainSid(String domainSid) {
        this.domainSid = domainSid;
        return this;
    }
}