package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class Adexchangebuyer2BiddersFilterSetsImpressionMetricsListPathParams {
    @SpeakeasyMetadata("pathParam:style=simple,explode=false,name=filterSetName")
    public String filterSetName;
    public Adexchangebuyer2BiddersFilterSetsImpressionMetricsListPathParams withFilterSetName(String filterSetName) {
        this.filterSetName = filterSetName;
        return this;
    }
}