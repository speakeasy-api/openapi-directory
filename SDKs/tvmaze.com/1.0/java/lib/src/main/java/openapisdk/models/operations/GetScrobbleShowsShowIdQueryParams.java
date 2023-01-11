package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class GetScrobbleShowsShowIdQueryParams {
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=embed")
    public GetScrobbleShowsShowIdEmbedEnum embed;
    public GetScrobbleShowsShowIdQueryParams withEmbed(GetScrobbleShowsShowIdEmbedEnum embed) {
        this.embed = embed;
        return this;
    }
}