package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class DcimRackGroupsReadPathParams {
    @SpeakeasyMetadata("pathParam:style=simple,explode=false,name=id")
    public Long id;
    public DcimRackGroupsReadPathParams withId(Long id) {
        this.id = id;
        return this;
    }
}