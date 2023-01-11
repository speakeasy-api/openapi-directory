package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class GetServersIdPathParams {
    @SpeakeasyMetadata("pathParam:style=simple,explode=false,name=id")
    public Long id;
    public GetServersIdPathParams withId(Long id) {
        this.id = id;
        return this;
    }
}