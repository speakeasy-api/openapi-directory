package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class IpamVlansReadPathParams {
    @SpeakeasyMetadata("pathParam:style=simple,explode=false,name=id")
    public Long id;
    public IpamVlansReadPathParams withId(Long id) {
        this.id = id;
        return this;
    }
}