package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class GamesListQueryParams {
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=creators")
    public String creators;
    public GamesListQueryParams withCreators(String creators) {
        this.creators = creators;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=dates")
    public String dates;
    public GamesListQueryParams withDates(String dates) {
        this.dates = dates;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=developers")
    public String developers;
    public GamesListQueryParams withDevelopers(String developers) {
        this.developers = developers;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=exclude_additions")
    public Boolean excludeAdditions;
    public GamesListQueryParams withExcludeAdditions(Boolean excludeAdditions) {
        this.excludeAdditions = excludeAdditions;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=exclude_collection")
    public Long excludeCollection;
    public GamesListQueryParams withExcludeCollection(Long excludeCollection) {
        this.excludeCollection = excludeCollection;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=exclude_game_series")
    public Boolean excludeGameSeries;
    public GamesListQueryParams withExcludeGameSeries(Boolean excludeGameSeries) {
        this.excludeGameSeries = excludeGameSeries;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=exclude_parents")
    public Boolean excludeParents;
    public GamesListQueryParams withExcludeParents(Boolean excludeParents) {
        this.excludeParents = excludeParents;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=exclude_stores")
    public String excludeStores;
    public GamesListQueryParams withExcludeStores(String excludeStores) {
        this.excludeStores = excludeStores;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=genres")
    public String genres;
    public GamesListQueryParams withGenres(String genres) {
        this.genres = genres;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=metacritic")
    public String metacritic;
    public GamesListQueryParams withMetacritic(String metacritic) {
        this.metacritic = metacritic;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=ordering")
    public String ordering;
    public GamesListQueryParams withOrdering(String ordering) {
        this.ordering = ordering;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=page")
    public Long page;
    public GamesListQueryParams withPage(Long page) {
        this.page = page;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=page_size")
    public Long pageSize;
    public GamesListQueryParams withPageSize(Long pageSize) {
        this.pageSize = pageSize;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=parent_platforms")
    public String parentPlatforms;
    public GamesListQueryParams withParentPlatforms(String parentPlatforms) {
        this.parentPlatforms = parentPlatforms;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=platforms")
    public String platforms;
    public GamesListQueryParams withPlatforms(String platforms) {
        this.platforms = platforms;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=platforms_count")
    public Long platformsCount;
    public GamesListQueryParams withPlatformsCount(Long platformsCount) {
        this.platformsCount = platformsCount;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=publishers")
    public String publishers;
    public GamesListQueryParams withPublishers(String publishers) {
        this.publishers = publishers;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=search")
    public String search;
    public GamesListQueryParams withSearch(String search) {
        this.search = search;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=search_exact")
    public Boolean searchExact;
    public GamesListQueryParams withSearchExact(Boolean searchExact) {
        this.searchExact = searchExact;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=search_precise")
    public Boolean searchPrecise;
    public GamesListQueryParams withSearchPrecise(Boolean searchPrecise) {
        this.searchPrecise = searchPrecise;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=stores")
    public String stores;
    public GamesListQueryParams withStores(String stores) {
        this.stores = stores;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=tags")
    public String tags;
    public GamesListQueryParams withTags(String tags) {
        this.tags = tags;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=updated")
    public String updated;
    public GamesListQueryParams withUpdated(String updated) {
        this.updated = updated;
        return this;
    }
}