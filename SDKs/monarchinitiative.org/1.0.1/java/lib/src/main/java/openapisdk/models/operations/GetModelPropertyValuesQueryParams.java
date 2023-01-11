package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class GetModelPropertyValuesQueryParams {
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=contributor")
    public String contributor;
    public GetModelPropertyValuesQueryParams withContributor(String contributor) {
        this.contributor = contributor;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=title")
    public String title;
    public GetModelPropertyValuesQueryParams withTitle(String title) {
        this.title = title;
        return this;
    }
}