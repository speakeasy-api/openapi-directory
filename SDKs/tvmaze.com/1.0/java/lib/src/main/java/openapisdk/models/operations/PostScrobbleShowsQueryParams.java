package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class PostScrobbleShowsQueryParams {
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=imdb_id")
    public Long imdbId;
    public PostScrobbleShowsQueryParams withImdbId(Long imdbId) {
        this.imdbId = imdbId;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=thetvdb_id")
    public Long thetvdbId;
    public PostScrobbleShowsQueryParams withThetvdbId(Long thetvdbId) {
        this.thetvdbId = thetvdbId;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=tvmaze_id")
    public Long tvmazeId;
    public PostScrobbleShowsQueryParams withTvmazeId(Long tvmazeId) {
        this.tvmazeId = tvmazeId;
        return this;
    }
}