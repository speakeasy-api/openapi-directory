package openapisdk.models.shared;

import openapisdk.utils.SpeakeasyMetadata;

public class GetPodcastsInBatchForm {
    @SpeakeasyMetadata("form:name=ids")
    public String ids;
    public GetPodcastsInBatchForm withIds(String ids) {
        this.ids = ids;
        return this;
    }
    @SpeakeasyMetadata("form:name=itunes_ids")
    public String itunesIds;
    public GetPodcastsInBatchForm withItunesIds(String itunesIds) {
        this.itunesIds = itunesIds;
        return this;
    }
    @SpeakeasyMetadata("form:name=next_episode_pub_date")
    public Long nextEpisodePubDate;
    public GetPodcastsInBatchForm withNextEpisodePubDate(Long nextEpisodePubDate) {
        this.nextEpisodePubDate = nextEpisodePubDate;
        return this;
    }
    @SpeakeasyMetadata("form:name=rsses")
    public String rsses;
    public GetPodcastsInBatchForm withRsses(String rsses) {
        this.rsses = rsses;
        return this;
    }
    @SpeakeasyMetadata("form:name=show_latest_episodes")
    public Long showLatestEpisodes;
    public GetPodcastsInBatchForm withShowLatestEpisodes(Long showLatestEpisodes) {
        this.showLatestEpisodes = showLatestEpisodes;
        return this;
    }
}