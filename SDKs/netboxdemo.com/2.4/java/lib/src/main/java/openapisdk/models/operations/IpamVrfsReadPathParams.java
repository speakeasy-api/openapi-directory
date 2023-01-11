package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class IpamVrfsReadPathParams {
    @SpeakeasyMetadata("pathParam:style=simple,explode=false,name=id")
    public Long id;
    public IpamVrfsReadPathParams withId(Long id) {
        this.id = id;
        return this;
    }
}