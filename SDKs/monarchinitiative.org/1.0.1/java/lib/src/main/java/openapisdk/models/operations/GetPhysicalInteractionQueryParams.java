package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class GetPhysicalInteractionQueryParams {
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=contributor")
    public String contributor;
    public GetPhysicalInteractionQueryParams withContributor(String contributor) {
        this.contributor = contributor;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=title")
    public String title;
    public GetPhysicalInteractionQueryParams withTitle(String title) {
        this.title = title;
        return this;
    }
}