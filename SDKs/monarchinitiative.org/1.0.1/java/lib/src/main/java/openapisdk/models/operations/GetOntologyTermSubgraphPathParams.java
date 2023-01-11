package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class GetOntologyTermSubgraphPathParams {
    @SpeakeasyMetadata("pathParam:style=simple,explode=false,name=id")
    public String id;
    public GetOntologyTermSubgraphPathParams withId(String id) {
        this.id = id;
        return this;
    }
}