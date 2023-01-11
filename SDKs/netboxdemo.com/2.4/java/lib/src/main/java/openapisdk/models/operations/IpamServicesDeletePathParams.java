package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class IpamServicesDeletePathParams {
    @SpeakeasyMetadata("pathParam:style=simple,explode=false,name=id")
    public Long id;
    public IpamServicesDeletePathParams withId(Long id) {
        this.id = id;
        return this;
    }
}