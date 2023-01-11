package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class GetUsersIdWritePermissionsPathParams {
    @SpeakeasyMetadata("pathParam:style=simple,explode=false,name=id")
    public Long id;
    public GetUsersIdWritePermissionsPathParams withId(Long id) {
        this.id = id;
        return this;
    }
}