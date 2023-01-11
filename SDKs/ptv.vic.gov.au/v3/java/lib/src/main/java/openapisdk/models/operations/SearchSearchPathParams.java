package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class SearchSearchPathParams {
    @SpeakeasyMetadata("pathParam:style=simple,explode=false,name=search_term")
    public String searchTerm;
    public SearchSearchPathParams withSearchTerm(String searchTerm) {
        this.searchTerm = searchTerm;
        return this;
    }
}