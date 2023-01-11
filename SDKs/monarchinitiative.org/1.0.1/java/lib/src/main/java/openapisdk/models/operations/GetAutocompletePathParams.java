package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class GetAutocompletePathParams {
    @SpeakeasyMetadata("pathParam:style=simple,explode=false,name=term")
    public String term;
    public GetAutocompletePathParams withTerm(String term) {
        this.term = term;
        return this;
    }
}