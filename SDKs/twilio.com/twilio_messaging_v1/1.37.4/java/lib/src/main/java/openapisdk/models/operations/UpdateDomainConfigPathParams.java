package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class UpdateDomainConfigPathParams {
    @SpeakeasyMetadata("pathParam:style=simple,explode=false,name=DomainSid")
    public String domainSid;
    public UpdateDomainConfigPathParams withDomainSid(String domainSid) {
        this.domainSid = domainSid;
        return this;
    }
}