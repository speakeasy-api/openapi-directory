package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class SourcesGetV2SourcesGetQueryParams {
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=limit")
    public Long limit;
    public SourcesGetV2SourcesGetQueryParams withLimit(Long limit) {
        this.limit = limit;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=offset")
    public Long offset;
    public SourcesGetV2SourcesGetQueryParams withOffset(Long offset) {
        this.offset = offset;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=order_by")
    public java.util.Map<String, Object> orderBy;
    public SourcesGetV2SourcesGetQueryParams withOrderBy(java.util.Map<String, Object> orderBy) {
        this.orderBy = orderBy;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=page")
    public Long page;
    public SourcesGetV2SourcesGetQueryParams withPage(Long page) {
        this.page = page;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=sort")
    public java.util.Map<String, Object> sort;
    public SourcesGetV2SourcesGetQueryParams withSort(java.util.Map<String, Object> sort) {
        this.sort = sort;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=sourceId")
    public Long[] sourceId;
    public SourcesGetV2SourcesGetQueryParams withSourceId(Long[] sourceId) {
        this.sourceId = sourceId;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=sourceName")
    public String[] sourceName;
    public SourcesGetV2SourcesGetQueryParams withSourceName(String[] sourceName) {
        this.sourceName = sourceName;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=sourceSlug")
    public String[] sourceSlug;
    public SourcesGetV2SourcesGetQueryParams withSourceSlug(String[] sourceSlug) {
        this.sourceSlug = sourceSlug;
        return this;
    }
}