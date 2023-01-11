package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class GetQueryQueryParams {
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=count")
    public Double count;
    public GetQueryQueryParams withCount(Double count) {
        this.count = count;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=inUrlPrefixes")
    public String inUrlPrefixes;
    public GetQueryQueryParams withInUrlPrefixes(String inUrlPrefixes) {
        this.inUrlPrefixes = inUrlPrefixes;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=q")
    public String q;
    public GetQueryQueryParams withQ(String q) {
        this.q = q;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=start")
    public Double start;
    public GetQueryQueryParams withStart(Double start) {
        this.start = start;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=subdomains")
    public String subdomains;
    public GetQueryQueryParams withSubdomains(String subdomains) {
        this.subdomains = subdomains;
        return this;
    }
}