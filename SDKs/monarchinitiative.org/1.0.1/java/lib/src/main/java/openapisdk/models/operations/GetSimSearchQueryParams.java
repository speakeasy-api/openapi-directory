package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class GetSimSearchQueryParams {
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=id")
    public String[] id;
    public GetSimSearchQueryParams withId(String[] id) {
        this.id = id;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=is_feature_set")
    public Boolean isFeatureSet;
    public GetSimSearchQueryParams withIsFeatureSet(Boolean isFeatureSet) {
        this.isFeatureSet = isFeatureSet;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=limit")
    public Long limit;
    public GetSimSearchQueryParams withLimit(Long limit) {
        this.limit = limit;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=metric")
    public GetSimSearchMetricEnum metric;
    public GetSimSearchQueryParams withMetric(GetSimSearchMetricEnum metric) {
        this.metric = metric;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=taxon")
    public String taxon;
    public GetSimSearchQueryParams withTaxon(String taxon) {
        this.taxon = taxon;
        return this;
    }
}