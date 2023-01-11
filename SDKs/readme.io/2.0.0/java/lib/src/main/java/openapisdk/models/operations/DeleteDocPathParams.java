package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class DeleteDocPathParams {
    @SpeakeasyMetadata("pathParam:style=simple,explode=false,name=slug")
    public String slug;
    public DeleteDocPathParams withSlug(String slug) {
        this.slug = slug;
        return this;
    }
}