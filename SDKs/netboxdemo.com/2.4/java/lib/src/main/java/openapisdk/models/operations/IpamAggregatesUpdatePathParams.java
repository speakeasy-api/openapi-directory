package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class IpamAggregatesUpdatePathParams {
    @SpeakeasyMetadata("pathParam:style=simple,explode=false,name=id")
    public Long id;
    public IpamAggregatesUpdatePathParams withId(Long id) {
        this.id = id;
        return this;
    }
}