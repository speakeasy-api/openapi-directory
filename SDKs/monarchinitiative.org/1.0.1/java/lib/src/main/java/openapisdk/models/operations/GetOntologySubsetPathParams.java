package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class GetOntologySubsetPathParams {
    @SpeakeasyMetadata("pathParam:style=simple,explode=false,name=id")
    public String id;
    public GetOntologySubsetPathParams withId(String id) {
        this.id = id;
        return this;
    }
}