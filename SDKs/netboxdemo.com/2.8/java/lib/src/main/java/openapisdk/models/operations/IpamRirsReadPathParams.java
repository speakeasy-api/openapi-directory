package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class IpamRirsReadPathParams {
    @SpeakeasyMetadata("pathParam:style=simple,explode=false,name=id")
    public Long id;
    public IpamRirsReadPathParams withId(Long id) {
        this.id = id;
        return this;
    }
}