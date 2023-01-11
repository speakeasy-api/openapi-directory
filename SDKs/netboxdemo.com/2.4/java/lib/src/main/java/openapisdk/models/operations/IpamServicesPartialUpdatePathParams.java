package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class IpamServicesPartialUpdatePathParams {
    @SpeakeasyMetadata("pathParam:style=simple,explode=false,name=id")
    public Long id;
    public IpamServicesPartialUpdatePathParams withId(Long id) {
        this.id = id;
        return this;
    }
}