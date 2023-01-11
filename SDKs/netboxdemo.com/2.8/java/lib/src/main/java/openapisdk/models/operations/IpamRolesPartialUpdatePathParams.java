package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class IpamRolesPartialUpdatePathParams {
    @SpeakeasyMetadata("pathParam:style=simple,explode=false,name=id")
    public Long id;
    public IpamRolesPartialUpdatePathParams withId(Long id) {
        this.id = id;
        return this;
    }
}