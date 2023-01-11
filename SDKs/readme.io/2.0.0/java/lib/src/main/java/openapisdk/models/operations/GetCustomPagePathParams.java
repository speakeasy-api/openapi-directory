package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class GetCustomPagePathParams {
    @SpeakeasyMetadata("pathParam:style=simple,explode=false,name=slug")
    public String slug;
    public GetCustomPagePathParams withSlug(String slug) {
        this.slug = slug;
        return this;
    }
}