package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class GetTrackCollectionListQueryParams {
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=embed")
    public GetTrackCollectionListEmbedEnum[] embed;
    public GetTrackCollectionListQueryParams withEmbed(GetTrackCollectionListEmbedEnum[] embed) {
        this.embed = embed;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=page")
    public Long page;
    public GetTrackCollectionListQueryParams withPage(Long page) {
        this.page = page;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=per_page")
    public Long perPage;
    public GetTrackCollectionListQueryParams withPerPage(Long perPage) {
        this.perPage = perPage;
        return this;
    }
}