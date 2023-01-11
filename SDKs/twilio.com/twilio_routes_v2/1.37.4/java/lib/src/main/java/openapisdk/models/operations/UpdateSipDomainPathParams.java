package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class UpdateSipDomainPathParams {
    @SpeakeasyMetadata("pathParam:style=simple,explode=false,name=SipDomain")
    public String sipDomain;
    public UpdateSipDomainPathParams withSipDomain(String sipDomain) {
        this.sipDomain = sipDomain;
        return this;
    }
}