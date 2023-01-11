package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class FetchDomainCertV4PathParams {
    @SpeakeasyMetadata("pathParam:style=simple,explode=false,name=DomainSid")
    public String domainSid;
    public FetchDomainCertV4PathParams withDomainSid(String domainSid) {
        this.domainSid = domainSid;
        return this;
    }
}