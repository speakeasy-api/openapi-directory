package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class DcimRackRolesDeletePathParams {
    @SpeakeasyMetadata("pathParam:style=simple,explode=false,name=id")
    public Long id;
    public DcimRackRolesDeletePathParams withId(Long id) {
        this.id = id;
        return this;
    }
}