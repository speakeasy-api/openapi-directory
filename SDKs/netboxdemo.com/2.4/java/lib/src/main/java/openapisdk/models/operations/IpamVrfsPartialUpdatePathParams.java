package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class IpamVrfsPartialUpdatePathParams {
    @SpeakeasyMetadata("pathParam:style=simple,explode=false,name=id")
    public Long id;
    public IpamVrfsPartialUpdatePathParams withId(Long id) {
        this.id = id;
        return this;
    }
}