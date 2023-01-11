package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class GetMeReputationQueryParams {
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=callback")
    public String callback;
    public GetMeReputationQueryParams withCallback(String callback) {
        this.callback = callback;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=filter")
    public String filter;
    public GetMeReputationQueryParams withFilter(String filter) {
        this.filter = filter;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=site")
    public String site;
    public GetMeReputationQueryParams withSite(String site) {
        this.site = site;
        return this;
    }
}