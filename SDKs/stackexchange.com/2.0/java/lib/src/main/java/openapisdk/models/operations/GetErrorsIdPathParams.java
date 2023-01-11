package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class GetErrorsIdPathParams {
    @SpeakeasyMetadata("pathParam:style=simple,explode=false,name=id")
    public Long id;
    public GetErrorsIdPathParams withId(Long id) {
        this.id = id;
        return this;
    }
}