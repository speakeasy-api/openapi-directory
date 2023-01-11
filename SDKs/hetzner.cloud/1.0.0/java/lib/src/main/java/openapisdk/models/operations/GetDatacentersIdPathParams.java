package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class GetDatacentersIdPathParams {
    @SpeakeasyMetadata("pathParam:style=simple,explode=false,name=id")
    public Long id;
    public GetDatacentersIdPathParams withId(Long id) {
        this.id = id;
        return this;
    }
}