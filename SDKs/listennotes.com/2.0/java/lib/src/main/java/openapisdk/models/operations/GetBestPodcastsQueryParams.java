package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class GetBestPodcastsQueryParams {
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=genre_id")
    public String genreId;
    public GetBestPodcastsQueryParams withGenreId(String genreId) {
        this.genreId = genreId;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=language")
    public String language;
    public GetBestPodcastsQueryParams withLanguage(String language) {
        this.language = language;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=page")
    public Long page;
    public GetBestPodcastsQueryParams withPage(Long page) {
        this.page = page;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=publisher_region")
    public String publisherRegion;
    public GetBestPodcastsQueryParams withPublisherRegion(String publisherRegion) {
        this.publisherRegion = publisherRegion;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=region")
    public String region;
    public GetBestPodcastsQueryParams withRegion(String region) {
        this.region = region;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=safe_mode")
    public Long safeMode;
    public GetBestPodcastsQueryParams withSafeMode(Long safeMode) {
        this.safeMode = safeMode;
        return this;
    }
}