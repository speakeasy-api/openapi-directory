package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class GetOntologyTermPathParams {
    @SpeakeasyMetadata("pathParam:style=simple,explode=false,name=id")
    public String id;
    public GetOntologyTermPathParams withId(String id) {
        this.id = id;
        return this;
    }
}