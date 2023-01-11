package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class GetSimCompareQueryParams {
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=is_feature_set")
    public Boolean isFeatureSet;
    public GetSimCompareQueryParams withIsFeatureSet(Boolean isFeatureSet) {
        this.isFeatureSet = isFeatureSet;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=metric")
    public GetSimCompareMetricEnum metric;
    public GetSimCompareQueryParams withMetric(GetSimCompareMetricEnum metric) {
        this.metric = metric;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=query_id")
    public String[] queryId;
    public GetSimCompareQueryParams withQueryId(String[] queryId) {
        this.queryId = queryId;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=ref_id")
    public String[] refId;
    public GetSimCompareQueryParams withRefId(String[] refId) {
        this.refId = refId;
        return this;
    }
}