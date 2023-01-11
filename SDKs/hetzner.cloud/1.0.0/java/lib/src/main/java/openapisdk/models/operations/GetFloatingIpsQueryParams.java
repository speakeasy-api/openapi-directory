package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class GetFloatingIpsQueryParams {
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=label_selector")
    public String labelSelector;
    public GetFloatingIpsQueryParams withLabelSelector(String labelSelector) {
        this.labelSelector = labelSelector;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=name")
    public String name;
    public GetFloatingIpsQueryParams withName(String name) {
        this.name = name;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=sort")
    public GetFloatingIpsSortEnum sort;
    public GetFloatingIpsQueryParams withSort(GetFloatingIpsSortEnum sort) {
        this.sort = sort;
        return this;
    }
}