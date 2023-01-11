package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class GetCuratedPodcastsQueryParams {
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=page")
    public Long page;
    public GetCuratedPodcastsQueryParams withPage(Long page) {
        this.page = page;
        return this;
    }
}