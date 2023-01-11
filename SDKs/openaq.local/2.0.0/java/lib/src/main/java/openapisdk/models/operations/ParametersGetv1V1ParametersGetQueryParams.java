package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class ParametersGetv1V1ParametersGetQueryParams {
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=limit")
    public Long limit;
    public ParametersGetv1V1ParametersGetQueryParams withLimit(Long limit) {
        this.limit = limit;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=offset")
    public Long offset;
    public ParametersGetv1V1ParametersGetQueryParams withOffset(Long offset) {
        this.offset = offset;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=order_by")
    public Object orderBy;
    public ParametersGetv1V1ParametersGetQueryParams withOrderBy(Object orderBy) {
        this.orderBy = orderBy;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=page")
    public Long page;
    public ParametersGetv1V1ParametersGetQueryParams withPage(Long page) {
        this.page = page;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=sort")
    public java.util.Map<String, Object> sort;
    public ParametersGetv1V1ParametersGetQueryParams withSort(java.util.Map<String, Object> sort) {
        this.sort = sort;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=sourceId")
    public Long[] sourceId;
    public ParametersGetv1V1ParametersGetQueryParams withSourceId(Long[] sourceId) {
        this.sourceId = sourceId;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=sourceName")
    public String[] sourceName;
    public ParametersGetv1V1ParametersGetQueryParams withSourceName(String[] sourceName) {
        this.sourceName = sourceName;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=sourceSlug")
    public String[] sourceSlug;
    public ParametersGetv1V1ParametersGetQueryParams withSourceSlug(String[] sourceSlug) {
        this.sourceSlug = sourceSlug;
        return this;
    }
}