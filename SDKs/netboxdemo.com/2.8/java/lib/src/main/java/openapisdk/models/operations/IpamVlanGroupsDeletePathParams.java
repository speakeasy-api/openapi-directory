package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class IpamVlanGroupsDeletePathParams {
    @SpeakeasyMetadata("pathParam:style=simple,explode=false,name=id")
    public Long id;
    public IpamVlanGroupsDeletePathParams withId(Long id) {
        this.id = id;
        return this;
    }
}