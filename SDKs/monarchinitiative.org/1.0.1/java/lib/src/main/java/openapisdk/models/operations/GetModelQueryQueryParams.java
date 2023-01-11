package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class GetModelQueryQueryParams {
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=contributor")
    public String contributor;
    public GetModelQueryQueryParams withContributor(String contributor) {
        this.contributor = contributor;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=title")
    public String title;
    public GetModelQueryQueryParams withTitle(String title) {
        this.title = title;
        return this;
    }
}