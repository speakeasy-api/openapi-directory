package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class FetchDomainConfigPathParams {
    @SpeakeasyMetadata("pathParam:style=simple,explode=false,name=DomainSid")
    public String domainSid;
    public FetchDomainConfigPathParams withDomainSid(String domainSid) {
        this.domainSid = domainSid;
        return this;
    }
}