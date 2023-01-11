package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class DeleteChangelogPathParams {
    @SpeakeasyMetadata("pathParam:style=simple,explode=false,name=slug")
    public String slug;
    public DeleteChangelogPathParams withSlug(String slug) {
        this.slug = slug;
        return this;
    }
}