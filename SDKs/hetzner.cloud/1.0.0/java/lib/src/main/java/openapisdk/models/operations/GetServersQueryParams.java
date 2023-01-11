package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class GetServersQueryParams {
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=label_selector")
    public String labelSelector;
    public GetServersQueryParams withLabelSelector(String labelSelector) {
        this.labelSelector = labelSelector;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=name")
    public String name;
    public GetServersQueryParams withName(String name) {
        this.name = name;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=sort")
    public GetServersSortEnum sort;
    public GetServersQueryParams withSort(GetServersSortEnum sort) {
        this.sort = sort;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=status")
    public GetServersStatusEnum status;
    public GetServersQueryParams withStatus(GetServersStatusEnum status) {
        this.status = status;
        return this;
    }
}