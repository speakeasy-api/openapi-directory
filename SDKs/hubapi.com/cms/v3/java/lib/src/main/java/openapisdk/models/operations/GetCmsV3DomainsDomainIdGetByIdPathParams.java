package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class GetCmsV3DomainsDomainIdGetByIdPathParams {
    @SpeakeasyMetadata("pathParam:style=simple,explode=false,name=domainId")
    public String domainId;
    public GetCmsV3DomainsDomainIdGetByIdPathParams withDomainId(String domainId) {
        this.domainId = domainId;
        return this;
    }
}