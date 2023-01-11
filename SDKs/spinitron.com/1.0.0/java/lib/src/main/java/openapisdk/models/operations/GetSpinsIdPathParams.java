package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class GetSpinsIdPathParams {
    @SpeakeasyMetadata("pathParam:style=simple,explode=false,name=id")
    public Long id;
    public GetSpinsIdPathParams withId(Long id) {
        this.id = id;
        return this;
    }
}