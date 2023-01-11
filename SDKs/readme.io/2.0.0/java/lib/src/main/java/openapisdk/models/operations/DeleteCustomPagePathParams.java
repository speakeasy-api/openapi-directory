package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class DeleteCustomPagePathParams {
    @SpeakeasyMetadata("pathParam:style=simple,explode=false,name=slug")
    public String slug;
    public DeleteCustomPagePathParams withSlug(String slug) {
        this.slug = slug;
        return this;
    }
}