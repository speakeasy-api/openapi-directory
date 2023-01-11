package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class SearchPathwaysUsingGetPathParams {
    @SpeakeasyMetadata("pathParam:style=simple,explode=false,name=searchString")
    public String searchString;
    public SearchPathwaysUsingGetPathParams withSearchString(String searchString) {
        this.searchString = searchString;
        return this;
    }
}