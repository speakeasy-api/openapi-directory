package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class GetInstanceObjectQueryParams {
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=contributor")
    public String contributor;
    public GetInstanceObjectQueryParams withContributor(String contributor) {
        this.contributor = contributor;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=title")
    public String title;
    public GetInstanceObjectQueryParams withTitle(String title) {
        this.title = title;
        return this;
    }
}