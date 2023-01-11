package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class GetImagesQueryParams {
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=bound_to")
    public String boundTo;
    public GetImagesQueryParams withBoundTo(String boundTo) {
        this.boundTo = boundTo;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=include_deprecated")
    public Boolean includeDeprecated;
    public GetImagesQueryParams withIncludeDeprecated(Boolean includeDeprecated) {
        this.includeDeprecated = includeDeprecated;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=label_selector")
    public String labelSelector;
    public GetImagesQueryParams withLabelSelector(String labelSelector) {
        this.labelSelector = labelSelector;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=name")
    public String name;
    public GetImagesQueryParams withName(String name) {
        this.name = name;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=sort")
    public GetImagesSortEnum sort;
    public GetImagesQueryParams withSort(GetImagesSortEnum sort) {
        this.sort = sort;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=status")
    public GetImagesStatusEnum status;
    public GetImagesQueryParams withStatus(GetImagesStatusEnum status) {
        this.status = status;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=type")
    public GetImagesTypeEnum type;
    public GetImagesQueryParams withType(GetImagesTypeEnum type) {
        this.type = type;
        return this;
    }
}