package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class IpamVrfsDeletePathParams {
    @SpeakeasyMetadata("pathParam:style=simple,explode=false,name=id")
    public Long id;
    public IpamVrfsDeletePathParams withId(Long id) {
        this.id = id;
        return this;
    }
}