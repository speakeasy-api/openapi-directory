package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class GetOntologyTermGraphPathParams {
    @SpeakeasyMetadata("pathParam:style=simple,explode=false,name=id")
    public String id;
    public GetOntologyTermGraphPathParams withId(String id) {
        this.id = id;
        return this;
    }
}