package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class FetchSipDomainPathParams {
    @SpeakeasyMetadata("pathParam:style=simple,explode=false,name=SipDomain")
    public String sipDomain;
    public FetchSipDomainPathParams withSipDomain(String sipDomain) {
        this.sipDomain = sipDomain;
        return this;
    }
}