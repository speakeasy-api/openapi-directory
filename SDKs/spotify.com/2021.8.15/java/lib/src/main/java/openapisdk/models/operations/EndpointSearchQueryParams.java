package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class EndpointSearchQueryParams {
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=include_external")
    public String includeExternal;
    public EndpointSearchQueryParams withIncludeExternal(String includeExternal) {
        this.includeExternal = includeExternal;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=limit")
    public Integer limit;
    public EndpointSearchQueryParams withLimit(Integer limit) {
        this.limit = limit;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=market")
    public String market;
    public EndpointSearchQueryParams withMarket(String market) {
        this.market = market;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=offset")
    public Integer offset;
    public EndpointSearchQueryParams withOffset(Integer offset) {
        this.offset = offset;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=q")
    public String q;
    public EndpointSearchQueryParams withQ(String q) {
        this.q = q;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=type")
    public String type;
    public EndpointSearchQueryParams withType(String type) {
        this.type = type;
        return this;
    }
}