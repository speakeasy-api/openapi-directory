package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class GetInfoQueryParams {
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=site")
    public String site;
    public GetInfoQueryParams withSite(String site) {
        this.site = site;
        return this;
    }
}