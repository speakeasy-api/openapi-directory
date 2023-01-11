package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class ParametersGetV2ParametersGetQueryParams {
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=limit")
    public Long limit;
    public ParametersGetV2ParametersGetQueryParams withLimit(Long limit) {
        this.limit = limit;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=offset")
    public Long offset;
    public ParametersGetV2ParametersGetQueryParams withOffset(Long offset) {
        this.offset = offset;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=order_by")
    public Object orderBy;
    public ParametersGetV2ParametersGetQueryParams withOrderBy(Object orderBy) {
        this.orderBy = orderBy;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=page")
    public Long page;
    public ParametersGetV2ParametersGetQueryParams withPage(Long page) {
        this.page = page;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=sort")
    public java.util.Map<String, Object> sort;
    public ParametersGetV2ParametersGetQueryParams withSort(java.util.Map<String, Object> sort) {
        this.sort = sort;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=sourceId")
    public Long[] sourceId;
    public ParametersGetV2ParametersGetQueryParams withSourceId(Long[] sourceId) {
        this.sourceId = sourceId;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=sourceName")
    public String[] sourceName;
    public ParametersGetV2ParametersGetQueryParams withSourceName(String[] sourceName) {
        this.sourceName = sourceName;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=sourceSlug")
    public String[] sourceSlug;
    public ParametersGetV2ParametersGetQueryParams withSourceSlug(String[] sourceSlug) {
        this.sourceSlug = sourceSlug;
        return this;
    }
}