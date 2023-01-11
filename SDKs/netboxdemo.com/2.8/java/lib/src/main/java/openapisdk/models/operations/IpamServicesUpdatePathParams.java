package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class IpamServicesUpdatePathParams {
    @SpeakeasyMetadata("pathParam:style=simple,explode=false,name=id")
    public Long id;
    public IpamServicesUpdatePathParams withId(Long id) {
        this.id = id;
        return this;
    }
}