package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class ReadmeGetV2SourcesReadmeSlugGetPathParams {
    @SpeakeasyMetadata("pathParam:style=simple,explode=false,name=slug")
    public String slug;
    public ReadmeGetV2SourcesReadmeSlugGetPathParams withSlug(String slug) {
        this.slug = slug;
        return this;
    }
}