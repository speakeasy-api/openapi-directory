package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class GetChangelogPathParams {
    @SpeakeasyMetadata("pathParam:style=simple,explode=false,name=slug")
    public String slug;
    public GetChangelogPathParams withSlug(String slug) {
        this.slug = slug;
        return this;
    }
}