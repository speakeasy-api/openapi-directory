package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class GetIsosIdPathParams {
    @SpeakeasyMetadata("pathParam:style=simple,explode=false,name=id")
    public Long id;
    public GetIsosIdPathParams withId(Long id) {
        this.id = id;
        return this;
    }
}