package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class PostSearchVersionNumberRoutedFilterPositionHeadingExtQueryParams {
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=routingTimeout")
    public Long routingTimeout;
    public PostSearchVersionNumberRoutedFilterPositionHeadingExtQueryParams withRoutingTimeout(Long routingTimeout) {
        this.routingTimeout = routingTimeout;
        return this;
    }
}