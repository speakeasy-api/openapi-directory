package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class GetProjectPathParams {
    @SpeakeasyMetadata("pathParam:style=simple,explode=false,name=id")
    public Long id;
    public GetProjectPathParams withId(Long id) {
        this.id = id;
        return this;
    }
}