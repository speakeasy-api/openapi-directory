package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class GetDocPathParams {
    @SpeakeasyMetadata("pathParam:style=simple,explode=false,name=slug")
    public String slug;
    public GetDocPathParams withSlug(String slug) {
        this.slug = slug;
        return this;
    }
}