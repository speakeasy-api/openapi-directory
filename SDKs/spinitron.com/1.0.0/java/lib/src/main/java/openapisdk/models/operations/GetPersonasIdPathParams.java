package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class GetPersonasIdPathParams {
    @SpeakeasyMetadata("pathParam:style=simple,explode=false,name=id")
    public Long id;
    public GetPersonasIdPathParams withId(Long id) {
        this.id = id;
        return this;
    }
}