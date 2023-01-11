package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class GetImageCollectionListQueryParams {
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=embed")
    public GetImageCollectionListEmbedEnum[] embed;
    public GetImageCollectionListQueryParams withEmbed(GetImageCollectionListEmbedEnum[] embed) {
        this.embed = embed;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=page")
    public Long page;
    public GetImageCollectionListQueryParams withPage(Long page) {
        this.page = page;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=per_page")
    public Long perPage;
    public GetImageCollectionListQueryParams withPerPage(Long perPage) {
        this.perPage = perPage;
        return this;
    }
}