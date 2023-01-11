package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class GetModelPropertiesQueryParams {
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=contributor")
    public String contributor;
    public GetModelPropertiesQueryParams withContributor(String contributor) {
        this.contributor = contributor;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=title")
    public String title;
    public GetModelPropertiesQueryParams withTitle(String title) {
        this.title = title;
        return this;
    }
}