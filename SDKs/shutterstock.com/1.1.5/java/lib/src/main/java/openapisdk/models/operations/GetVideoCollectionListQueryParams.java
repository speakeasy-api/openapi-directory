package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class GetVideoCollectionListQueryParams {
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=embed")
    public GetVideoCollectionListEmbedEnum[] embed;
    public GetVideoCollectionListQueryParams withEmbed(GetVideoCollectionListEmbedEnum[] embed) {
        this.embed = embed;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=page")
    public Long page;
    public GetVideoCollectionListQueryParams withPage(Long page) {
        this.page = page;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=per_page")
    public Long perPage;
    public GetVideoCollectionListQueryParams withPerPage(Long perPage) {
        this.perPage = perPage;
        return this;
    }
}