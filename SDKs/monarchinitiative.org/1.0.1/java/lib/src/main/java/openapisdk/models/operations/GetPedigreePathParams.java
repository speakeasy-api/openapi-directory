package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class GetPedigreePathParams {
    @SpeakeasyMetadata("pathParam:style=simple,explode=false,name=id")
    public String id;
    public GetPedigreePathParams withId(String id) {
        this.id = id;
        return this;
    }
}