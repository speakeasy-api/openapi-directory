package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class GetShowsIdPathParams {
    @SpeakeasyMetadata("pathParam:style=simple,explode=false,name=id")
    public Long id;
    public GetShowsIdPathParams withId(Long id) {
        this.id = id;
        return this;
    }
}