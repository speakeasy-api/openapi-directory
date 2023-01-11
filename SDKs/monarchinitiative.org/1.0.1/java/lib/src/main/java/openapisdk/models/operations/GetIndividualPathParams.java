package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class GetIndividualPathParams {
    @SpeakeasyMetadata("pathParam:style=simple,explode=false,name=id")
    public String id;
    public GetIndividualPathParams withId(String id) {
        this.id = id;
        return this;
    }
}