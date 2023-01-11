package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class GetSearchHpoEntitiesPathParams {
    @SpeakeasyMetadata("pathParam:style=simple,explode=false,name=term")
    public String term;
    public GetSearchHpoEntitiesPathParams withTerm(String term) {
        this.term = term;
        return this;
    }
}