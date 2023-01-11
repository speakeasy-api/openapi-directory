package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class UpdateChangelogPathParams {
    @SpeakeasyMetadata("pathParam:style=simple,explode=false,name=slug")
    public String slug;
    public UpdateChangelogPathParams withSlug(String slug) {
        this.slug = slug;
        return this;
    }
}