package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class GetSearchVersionNumberRoutedFilterPositionHeadingExtQueryParams {
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=poiList")
    public String poiList;
    public GetSearchVersionNumberRoutedFilterPositionHeadingExtQueryParams withPoiList(String poiList) {
        this.poiList = poiList;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=routingTimeout")
    public Long routingTimeout;
    public GetSearchVersionNumberRoutedFilterPositionHeadingExtQueryParams withRoutingTimeout(Long routingTimeout) {
        this.routingTimeout = routingTimeout;
        return this;
    }
}