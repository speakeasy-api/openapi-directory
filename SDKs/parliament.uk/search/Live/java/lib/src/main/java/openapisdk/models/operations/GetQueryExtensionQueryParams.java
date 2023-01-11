package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class GetQueryExtensionQueryParams {
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=count")
    public Double count;
    public GetQueryExtensionQueryParams withCount(Double count) {
        this.count = count;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=inUrlPrefixes")
    public String inUrlPrefixes;
    public GetQueryExtensionQueryParams withInUrlPrefixes(String inUrlPrefixes) {
        this.inUrlPrefixes = inUrlPrefixes;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=q")
    public String q;
    public GetQueryExtensionQueryParams withQ(String q) {
        this.q = q;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=start")
    public Double start;
    public GetQueryExtensionQueryParams withStart(Double start) {
        this.start = start;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=subdomains")
    public String subdomains;
    public GetQueryExtensionQueryParams withSubdomains(String subdomains) {
        this.subdomains = subdomains;
        return this;
    }
}