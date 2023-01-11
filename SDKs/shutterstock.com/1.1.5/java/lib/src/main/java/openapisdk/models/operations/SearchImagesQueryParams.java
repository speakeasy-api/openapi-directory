package openapisdk.models.operations;

import java.time.LocalDate;
import openapisdk.utils.SpeakeasyMetadata;

public class SearchImagesQueryParams {
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=added_date")
    public LocalDate addedDate;
    public SearchImagesQueryParams withAddedDate(LocalDate addedDate) {
        this.addedDate = addedDate;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=added_date_end")
    public LocalDate addedDateEnd;
    public SearchImagesQueryParams withAddedDateEnd(LocalDate addedDateEnd) {
        this.addedDateEnd = addedDateEnd;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=added_date_start")
    public LocalDate addedDateStart;
    public SearchImagesQueryParams withAddedDateStart(LocalDate addedDateStart) {
        this.addedDateStart = addedDateStart;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=aspect_ratio")
    public Double aspectRatio;
    public SearchImagesQueryParams withAspectRatio(Double aspectRatio) {
        this.aspectRatio = aspectRatio;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=aspect_ratio_max")
    public Double aspectRatioMax;
    public SearchImagesQueryParams withAspectRatioMax(Double aspectRatioMax) {
        this.aspectRatioMax = aspectRatioMax;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=aspect_ratio_min")
    public Double aspectRatioMin;
    public SearchImagesQueryParams withAspectRatioMin(Double aspectRatioMin) {
        this.aspectRatioMin = aspectRatioMin;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=category")
    public String category;
    public SearchImagesQueryParams withCategory(String category) {
        this.category = category;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=color")
    public String color;
    public SearchImagesQueryParams withColor(String color) {
        this.color = color;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=contributor")
    public String[] contributor;
    public SearchImagesQueryParams withContributor(String[] contributor) {
        this.contributor = contributor;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=contributor_country")
    public Object contributorCountry;
    public SearchImagesQueryParams withContributorCountry(Object contributorCountry) {
        this.contributorCountry = contributorCountry;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=fields")
    public String fields;
    public SearchImagesQueryParams withFields(String fields) {
        this.fields = fields;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=height")
    public Long height;
    public SearchImagesQueryParams withHeight(Long height) {
        this.height = height;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=height_from")
    public Long heightFrom;
    public SearchImagesQueryParams withHeightFrom(Long heightFrom) {
        this.heightFrom = heightFrom;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=height_to")
    public Long heightTo;
    public SearchImagesQueryParams withHeightTo(Long heightTo) {
        this.heightTo = heightTo;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=image_type")
    public SearchImagesImageTypeEnum[] imageType;
    public SearchImagesQueryParams withImageType(SearchImagesImageTypeEnum[] imageType) {
        this.imageType = imageType;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=keyword_safe_search")
    public Boolean keywordSafeSearch;
    public SearchImagesQueryParams withKeywordSafeSearch(Boolean keywordSafeSearch) {
        this.keywordSafeSearch = keywordSafeSearch;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=language")
    public openapisdk.models.shared.LanguageEnum language;
    public SearchImagesQueryParams withLanguage(openapisdk.models.shared.LanguageEnum language) {
        this.language = language;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=license")
    public SearchImagesLicenseEnum[] license;
    public SearchImagesQueryParams withLicense(SearchImagesLicenseEnum[] license) {
        this.license = license;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=model")
    public String[] model;
    public SearchImagesQueryParams withModel(String[] model) {
        this.model = model;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=orientation")
    public SearchImagesOrientationEnum orientation;
    public SearchImagesQueryParams withOrientation(SearchImagesOrientationEnum orientation) {
        this.orientation = orientation;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=page")
    public Long page;
    public SearchImagesQueryParams withPage(Long page) {
        this.page = page;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=people_age")
    public SearchImagesPeopleAgeEnum peopleAge;
    public SearchImagesQueryParams withPeopleAge(SearchImagesPeopleAgeEnum peopleAge) {
        this.peopleAge = peopleAge;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=people_ethnicity")
    public SearchImagesPeopleEthnicityEnum[] peopleEthnicity;
    public SearchImagesQueryParams withPeopleEthnicity(SearchImagesPeopleEthnicityEnum[] peopleEthnicity) {
        this.peopleEthnicity = peopleEthnicity;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=people_gender")
    public SearchImagesPeopleGenderEnum peopleGender;
    public SearchImagesQueryParams withPeopleGender(SearchImagesPeopleGenderEnum peopleGender) {
        this.peopleGender = peopleGender;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=people_model_released")
    public Boolean peopleModelReleased;
    public SearchImagesQueryParams withPeopleModelReleased(Boolean peopleModelReleased) {
        this.peopleModelReleased = peopleModelReleased;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=people_number")
    public Long peopleNumber;
    public SearchImagesQueryParams withPeopleNumber(Long peopleNumber) {
        this.peopleNumber = peopleNumber;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=per_page")
    public Long perPage;
    public SearchImagesQueryParams withPerPage(Long perPage) {
        this.perPage = perPage;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=query")
    public String query;
    public SearchImagesQueryParams withQuery(String query) {
        this.query = query;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=region")
    public Object region;
    public SearchImagesQueryParams withRegion(Object region) {
        this.region = region;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=safe")
    public Boolean safe;
    public SearchImagesQueryParams withSafe(Boolean safe) {
        this.safe = safe;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=sort")
    public SearchImagesSortEnum sort;
    public SearchImagesQueryParams withSort(SearchImagesSortEnum sort) {
        this.sort = sort;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=spellcheck_query")
    public Boolean spellcheckQuery;
    public SearchImagesQueryParams withSpellcheckQuery(Boolean spellcheckQuery) {
        this.spellcheckQuery = spellcheckQuery;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=view")
    public SearchImagesViewEnum view;
    public SearchImagesQueryParams withView(SearchImagesViewEnum view) {
        this.view = view;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=width")
    public Long width;
    public SearchImagesQueryParams withWidth(Long width) {
        this.width = width;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=width_from")
    public Long widthFrom;
    public SearchImagesQueryParams withWidthFrom(Long widthFrom) {
        this.widthFrom = widthFrom;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=width_to")
    public Long widthTo;
    public SearchImagesQueryParams withWidthTo(Long widthTo) {
        this.widthTo = widthTo;
        return this;
    }
}