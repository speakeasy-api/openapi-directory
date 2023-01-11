package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class GetActionRelatedListQueryParams {
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=dataset")
    public String dataset;
    public GetActionRelatedListQueryParams withDataset(String dataset) {
        this.dataset = dataset;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=featured")
    public String featured;
    public GetActionRelatedListQueryParams withFeatured(String featured) {
        this.featured = featured;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=id")
    public String id;
    public GetActionRelatedListQueryParams withId(String id) {
        this.id = id;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=sort")
    public String sort;
    public GetActionRelatedListQueryParams withSort(String sort) {
        this.sort = sort;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=type_filter")
    public String typeFilter;
    public GetActionRelatedListQueryParams withTypeFilter(String typeFilter) {
        this.typeFilter = typeFilter;
        return this;
    }
}