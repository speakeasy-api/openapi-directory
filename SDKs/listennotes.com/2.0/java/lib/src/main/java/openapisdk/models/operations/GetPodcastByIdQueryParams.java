package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class GetPodcastByIdQueryParams {
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=next_episode_pub_date")
    public Long nextEpisodePubDate;
    public GetPodcastByIdQueryParams withNextEpisodePubDate(Long nextEpisodePubDate) {
        this.nextEpisodePubDate = nextEpisodePubDate;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=sort")
    public GetPodcastByIdSortEnum sort;
    public GetPodcastByIdQueryParams withSort(GetPodcastByIdSortEnum sort) {
        this.sort = sort;
        return this;
    }
}