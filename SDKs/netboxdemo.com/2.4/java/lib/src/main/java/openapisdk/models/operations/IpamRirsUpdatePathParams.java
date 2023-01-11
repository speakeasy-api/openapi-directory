package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class IpamRirsUpdatePathParams {
    @SpeakeasyMetadata("pathParam:style=simple,explode=false,name=id")
    public Long id;
    public IpamRirsUpdatePathParams withId(Long id) {
        this.id = id;
        return this;
    }
}