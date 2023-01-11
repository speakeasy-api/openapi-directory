package openapisdk.models.operations;

import java.time.LocalDate;
import openapisdk.utils.SpeakeasyMetadata;

public class SearchVideosQueryParams {
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=added_date")
    public LocalDate addedDate;
    public SearchVideosQueryParams withAddedDate(LocalDate addedDate) {
        this.addedDate = addedDate;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=added_date_end")
    public LocalDate addedDateEnd;
    public SearchVideosQueryParams withAddedDateEnd(LocalDate addedDateEnd) {
        this.addedDateEnd = addedDateEnd;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=added_date_start")
    public LocalDate addedDateStart;
    public SearchVideosQueryParams withAddedDateStart(LocalDate addedDateStart) {
        this.addedDateStart = addedDateStart;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=aspect_ratio")
    public SearchVideosAspectRatioEnum aspectRatio;
    public SearchVideosQueryParams withAspectRatio(SearchVideosAspectRatioEnum aspectRatio) {
        this.aspectRatio = aspectRatio;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=category")
    public String category;
    public SearchVideosQueryParams withCategory(String category) {
        this.category = category;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=contributor")
    public String[] contributor;
    public SearchVideosQueryParams withContributor(String[] contributor) {
        this.contributor = contributor;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=contributor_country")
    public String[] contributorCountry;
    public SearchVideosQueryParams withContributorCountry(String[] contributorCountry) {
        this.contributorCountry = contributorCountry;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=duration")
    public Long duration;
    public SearchVideosQueryParams withDuration(Long duration) {
        this.duration = duration;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=duration_from")
    public Long durationFrom;
    public SearchVideosQueryParams withDurationFrom(Long durationFrom) {
        this.durationFrom = durationFrom;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=duration_to")
    public Long durationTo;
    public SearchVideosQueryParams withDurationTo(Long durationTo) {
        this.durationTo = durationTo;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=fps")
    public Double fps;
    public SearchVideosQueryParams withFps(Double fps) {
        this.fps = fps;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=fps_from")
    public Double fpsFrom;
    public SearchVideosQueryParams withFpsFrom(Double fpsFrom) {
        this.fpsFrom = fpsFrom;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=fps_to")
    public Double fpsTo;
    public SearchVideosQueryParams withFpsTo(Double fpsTo) {
        this.fpsTo = fpsTo;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=keyword_safe_search")
    public Boolean keywordSafeSearch;
    public SearchVideosQueryParams withKeywordSafeSearch(Boolean keywordSafeSearch) {
        this.keywordSafeSearch = keywordSafeSearch;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=language")
    public openapisdk.models.shared.LanguageEnum language;
    public SearchVideosQueryParams withLanguage(openapisdk.models.shared.LanguageEnum language) {
        this.language = language;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=license")
    public SearchVideosLicenseEnum[] license;
    public SearchVideosQueryParams withLicense(SearchVideosLicenseEnum[] license) {
        this.license = license;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=model")
    public String[] model;
    public SearchVideosQueryParams withModel(String[] model) {
        this.model = model;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=page")
    public Long page;
    public SearchVideosQueryParams withPage(Long page) {
        this.page = page;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=people_age")
    public SearchVideosPeopleAgeEnum peopleAge;
    public SearchVideosQueryParams withPeopleAge(SearchVideosPeopleAgeEnum peopleAge) {
        this.peopleAge = peopleAge;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=people_ethnicity")
    public SearchVideosPeopleEthnicityEnum[] peopleEthnicity;
    public SearchVideosQueryParams withPeopleEthnicity(SearchVideosPeopleEthnicityEnum[] peopleEthnicity) {
        this.peopleEthnicity = peopleEthnicity;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=people_gender")
    public SearchVideosPeopleGenderEnum peopleGender;
    public SearchVideosQueryParams withPeopleGender(SearchVideosPeopleGenderEnum peopleGender) {
        this.peopleGender = peopleGender;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=people_model_released")
    public Boolean peopleModelReleased;
    public SearchVideosQueryParams withPeopleModelReleased(Boolean peopleModelReleased) {
        this.peopleModelReleased = peopleModelReleased;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=people_number")
    public Long peopleNumber;
    public SearchVideosQueryParams withPeopleNumber(Long peopleNumber) {
        this.peopleNumber = peopleNumber;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=per_page")
    public Long perPage;
    public SearchVideosQueryParams withPerPage(Long perPage) {
        this.perPage = perPage;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=query")
    public String query;
    public SearchVideosQueryParams withQuery(String query) {
        this.query = query;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=resolution")
    public SearchVideosResolutionEnum resolution;
    public SearchVideosQueryParams withResolution(SearchVideosResolutionEnum resolution) {
        this.resolution = resolution;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=safe")
    public Boolean safe;
    public SearchVideosQueryParams withSafe(Boolean safe) {
        this.safe = safe;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=sort")
    public SearchVideosSortEnum sort;
    public SearchVideosQueryParams withSort(SearchVideosSortEnum sort) {
        this.sort = sort;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=view")
    public SearchVideosViewEnum view;
    public SearchVideosQueryParams withView(SearchVideosViewEnum view) {
        this.view = view;
        return this;
    }
}