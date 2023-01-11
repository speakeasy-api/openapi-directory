package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class GetServerTypesIdPathParams {
    @SpeakeasyMetadata("pathParam:style=simple,explode=false,name=id")
    public Long id;
    public GetServerTypesIdPathParams withId(Long id) {
        this.id = id;
        return this;
    }
}