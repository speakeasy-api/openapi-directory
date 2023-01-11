package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class GetPlacementGroupsQueryParams {
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=label_selector")
    public String labelSelector;
    public GetPlacementGroupsQueryParams withLabelSelector(String labelSelector) {
        this.labelSelector = labelSelector;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=name")
    public String name;
    public GetPlacementGroupsQueryParams withName(String name) {
        this.name = name;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=sort")
    public GetPlacementGroupsSortEnum sort;
    public GetPlacementGroupsQueryParams withSort(GetPlacementGroupsSortEnum sort) {
        this.sort = sort;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=type")
    public GetPlacementGroupsTypeParameterTypeEnum type;
    public GetPlacementGroupsQueryParams withType(GetPlacementGroupsTypeParameterTypeEnum type) {
        this.type = type;
        return this;
    }
}