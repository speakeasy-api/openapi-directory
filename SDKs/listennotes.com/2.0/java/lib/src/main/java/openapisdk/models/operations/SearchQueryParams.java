package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class SearchQueryParams {
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=episode_count_max")
    public Long episodeCountMax;
    public SearchQueryParams withEpisodeCountMax(Long episodeCountMax) {
        this.episodeCountMax = episodeCountMax;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=episode_count_min")
    public Long episodeCountMin;
    public SearchQueryParams withEpisodeCountMin(Long episodeCountMin) {
        this.episodeCountMin = episodeCountMin;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=genre_ids")
    public String genreIds;
    public SearchQueryParams withGenreIds(String genreIds) {
        this.genreIds = genreIds;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=language")
    public String language;
    public SearchQueryParams withLanguage(String language) {
        this.language = language;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=len_max")
    public Long lenMax;
    public SearchQueryParams withLenMax(Long lenMax) {
        this.lenMax = lenMax;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=len_min")
    public Long lenMin;
    public SearchQueryParams withLenMin(Long lenMin) {
        this.lenMin = lenMin;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=ncid")
    public String ncid;
    public SearchQueryParams withNcid(String ncid) {
        this.ncid = ncid;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=ocid")
    public String ocid;
    public SearchQueryParams withOcid(String ocid) {
        this.ocid = ocid;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=offset")
    public Long offset;
    public SearchQueryParams withOffset(Long offset) {
        this.offset = offset;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=only_in")
    public String onlyIn;
    public SearchQueryParams withOnlyIn(String onlyIn) {
        this.onlyIn = onlyIn;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=published_after")
    public Long publishedAfter;
    public SearchQueryParams withPublishedAfter(Long publishedAfter) {
        this.publishedAfter = publishedAfter;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=published_before")
    public Long publishedBefore;
    public SearchQueryParams withPublishedBefore(Long publishedBefore) {
        this.publishedBefore = publishedBefore;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=q")
    public String q;
    public SearchQueryParams withQ(String q) {
        this.q = q;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=region")
    public String region;
    public SearchQueryParams withRegion(String region) {
        this.region = region;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=safe_mode")
    public Long safeMode;
    public SearchQueryParams withSafeMode(Long safeMode) {
        this.safeMode = safeMode;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=sort_by_date")
    public Long sortByDate;
    public SearchQueryParams withSortByDate(Long sortByDate) {
        this.sortByDate = sortByDate;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=type")
    public SearchTypeEnum type;
    public SearchQueryParams withType(SearchTypeEnum type) {
        this.type = type;
        return this;
    }
}