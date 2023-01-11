package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class GetCategoryDocsPathParams {
    @SpeakeasyMetadata("pathParam:style=simple,explode=false,name=slug")
    public String slug;
    public GetCategoryDocsPathParams withSlug(String slug) {
        this.slug = slug;
        return this;
    }
}