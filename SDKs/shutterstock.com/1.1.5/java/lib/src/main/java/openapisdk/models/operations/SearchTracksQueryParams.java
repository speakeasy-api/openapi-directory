package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class SearchTracksQueryParams {
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=artists")
    public String[] artists;
    public SearchTracksQueryParams withArtists(String[] artists) {
        this.artists = artists;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=bpm")
    public Long bpm;
    public SearchTracksQueryParams withBpm(Long bpm) {
        this.bpm = bpm;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=bpm_from")
    public Long bpmFrom;
    public SearchTracksQueryParams withBpmFrom(Long bpmFrom) {
        this.bpmFrom = bpmFrom;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=bpm_to")
    public Long bpmTo;
    public SearchTracksQueryParams withBpmTo(Long bpmTo) {
        this.bpmTo = bpmTo;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=duration")
    public Long duration;
    public SearchTracksQueryParams withDuration(Long duration) {
        this.duration = duration;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=duration_from")
    public Long durationFrom;
    public SearchTracksQueryParams withDurationFrom(Long durationFrom) {
        this.durationFrom = durationFrom;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=duration_to")
    public Long durationTo;
    public SearchTracksQueryParams withDurationTo(Long durationTo) {
        this.durationTo = durationTo;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=fields")
    public String fields;
    public SearchTracksQueryParams withFields(String fields) {
        this.fields = fields;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=genre")
    public String[] genre;
    public SearchTracksQueryParams withGenre(String[] genre) {
        this.genre = genre;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=instruments")
    public String[] instruments;
    public SearchTracksQueryParams withInstruments(String[] instruments) {
        this.instruments = instruments;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=is_instrumental")
    public Boolean isInstrumental;
    public SearchTracksQueryParams withIsInstrumental(Boolean isInstrumental) {
        this.isInstrumental = isInstrumental;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=language")
    public String language;
    public SearchTracksQueryParams withLanguage(String language) {
        this.language = language;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=library")
    public SearchTracksLibraryEnum library;
    public SearchTracksQueryParams withLibrary(SearchTracksLibraryEnum library) {
        this.library = library;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=moods")
    public String[] moods;
    public SearchTracksQueryParams withMoods(String[] moods) {
        this.moods = moods;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=page")
    public Long page;
    public SearchTracksQueryParams withPage(Long page) {
        this.page = page;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=per_page")
    public Long perPage;
    public SearchTracksQueryParams withPerPage(Long perPage) {
        this.perPage = perPage;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=query")
    public String query;
    public SearchTracksQueryParams withQuery(String query) {
        this.query = query;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=sort")
    public SearchTracksSortEnum sort;
    public SearchTracksQueryParams withSort(SearchTracksSortEnum sort) {
        this.sort = sort;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=sort_order")
    public SearchTracksSortOrderEnum sortOrder;
    public SearchTracksQueryParams withSortOrder(SearchTracksSortOrderEnum sortOrder) {
        this.sortOrder = sortOrder;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=view")
    public SearchTracksViewEnum view;
    public SearchTracksQueryParams withView(SearchTracksViewEnum view) {
        this.view = view;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=vocal_description")
    public String vocalDescription;
    public SearchTracksQueryParams withVocalDescription(String vocalDescription) {
        this.vocalDescription = vocalDescription;
        return this;
    }
}