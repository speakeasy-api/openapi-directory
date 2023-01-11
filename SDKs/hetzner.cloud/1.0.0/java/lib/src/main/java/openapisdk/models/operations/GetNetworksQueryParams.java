package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class GetNetworksQueryParams {
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=label_selector")
    public String labelSelector;
    public GetNetworksQueryParams withLabelSelector(String labelSelector) {
        this.labelSelector = labelSelector;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=name")
    public String name;
    public GetNetworksQueryParams withName(String name) {
        this.name = name;
        return this;
    }
}