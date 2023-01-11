package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class WellsTagsListQueryParams {
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=ordering")
    public String ordering;
    public WellsTagsListQueryParams withOrdering(String ordering) {
        this.ordering = ordering;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=search")
    public String search;
    public WellsTagsListQueryParams withSearch(String search) {
        this.search = search;
        return this;
    }
}