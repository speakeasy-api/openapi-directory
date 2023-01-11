package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class GetTargetsTargetIdAssetsQueryParams {
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=length")
    public Long length;
    public GetTargetsTargetIdAssetsQueryParams withLength(Long length) {
        this.length = length;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=ordering")
    public String ordering;
    public GetTargetsTargetIdAssetsQueryParams withOrdering(String ordering) {
        this.ordering = ordering;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=page")
    public Long page;
    public GetTargetsTargetIdAssetsQueryParams withPage(Long page) {
        this.page = page;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=search")
    public String search;
    public GetTargetsTargetIdAssetsQueryParams withSearch(String search) {
        this.search = search;
        return this;
    }
}