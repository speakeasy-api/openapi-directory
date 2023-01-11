package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class GetLabelsQueryParams {
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=length")
    public Long length;
    public GetLabelsQueryParams withLength(Long length) {
        this.length = length;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=ordering")
    public String ordering;
    public GetLabelsQueryParams withOrdering(String ordering) {
        this.ordering = ordering;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=page")
    public Long page;
    public GetLabelsQueryParams withPage(Long page) {
        this.page = page;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=search")
    public String search;
    public GetLabelsQueryParams withSearch(String search) {
        this.search = search;
        return this;
    }
}