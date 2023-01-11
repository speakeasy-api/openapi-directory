package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class IpamVlansUpdatePathParams {
    @SpeakeasyMetadata("pathParam:style=simple,explode=false,name=id")
    public Long id;
    public IpamVlansUpdatePathParams withId(Long id) {
        this.id = id;
        return this;
    }
}