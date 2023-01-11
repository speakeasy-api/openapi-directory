package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class GetArticlesearchJsonQueryParams {
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=begin_date")
    public String beginDate;
    public GetArticlesearchJsonQueryParams withBeginDate(String beginDate) {
        this.beginDate = beginDate;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=end_date")
    public String endDate;
    public GetArticlesearchJsonQueryParams withEndDate(String endDate) {
        this.endDate = endDate;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=facet_field")
    public String facetField;
    public GetArticlesearchJsonQueryParams withFacetField(String facetField) {
        this.facetField = facetField;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=facet_filter")
    public Boolean facetFilter;
    public GetArticlesearchJsonQueryParams withFacetFilter(Boolean facetFilter) {
        this.facetFilter = facetFilter;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=fl")
    public String fl;
    public GetArticlesearchJsonQueryParams withFl(String fl) {
        this.fl = fl;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=fq")
    public String fq;
    public GetArticlesearchJsonQueryParams withFq(String fq) {
        this.fq = fq;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=hl")
    public Boolean hl;
    public GetArticlesearchJsonQueryParams withHl(Boolean hl) {
        this.hl = hl;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=page")
    public Long page;
    public GetArticlesearchJsonQueryParams withPage(Long page) {
        this.page = page;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=q")
    public String q;
    public GetArticlesearchJsonQueryParams withQ(String q) {
        this.q = q;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=sort")
    public GetArticlesearchJsonSortEnum sort;
    public GetArticlesearchJsonQueryParams withSort(GetArticlesearchJsonSortEnum sort) {
        this.sort = sort;
        return this;
    }
}