package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class GetSearchEntitiesPathParams {
    @SpeakeasyMetadata("pathParam:style=simple,explode=false,name=term")
    public String term;
    public GetSearchEntitiesPathParams withTerm(String term) {
        this.term = term;
        return this;
    }
}