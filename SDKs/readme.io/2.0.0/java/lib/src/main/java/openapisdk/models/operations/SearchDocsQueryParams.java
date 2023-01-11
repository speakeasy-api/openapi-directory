package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class SearchDocsQueryParams {
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=search")
    public String search;
    public SearchDocsQueryParams withSearch(String search) {
        this.search = search;
        return this;
    }
}