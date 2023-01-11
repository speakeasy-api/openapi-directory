package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class IpamRolesUpdatePathParams {
    @SpeakeasyMetadata("pathParam:style=simple,explode=false,name=id")
    public Long id;
    public IpamRolesUpdatePathParams withId(Long id) {
        this.id = id;
        return this;
    }
}