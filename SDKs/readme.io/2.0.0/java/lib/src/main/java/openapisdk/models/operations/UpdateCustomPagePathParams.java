package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class UpdateCustomPagePathParams {
    @SpeakeasyMetadata("pathParam:style=simple,explode=false,name=slug")
    public String slug;
    public UpdateCustomPagePathParams withSlug(String slug) {
        this.slug = slug;
        return this;
    }
}