package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class GetDomainPathParams {
    @SpeakeasyMetadata("pathParam:style=simple,explode=false,name=domainId")
    public String domainId;
    public GetDomainPathParams withDomainId(String domainId) {
        this.domainId = domainId;
        return this;
    }
}