package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class DcimRackRolesPartialUpdatePathParams {
    @SpeakeasyMetadata("pathParam:style=simple,explode=false,name=id")
    public Long id;
    public DcimRackRolesPartialUpdatePathParams withId(Long id) {
        this.id = id;
        return this;
    }
}