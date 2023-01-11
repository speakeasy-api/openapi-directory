package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class GetNamesNotOfficialSearchQueryParams {
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=embed")
    public Long embed;
    public GetNamesNotOfficialSearchQueryParams withEmbed(Long embed) {
        this.embed = embed;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=exactSpelling")
    public Long exactSpelling;
    public GetNamesNotOfficialSearchQueryParams withExactSpelling(Long exactSpelling) {
        this.exactSpelling = exactSpelling;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=featureCategory")
    public String featureCategory;
    public GetNamesNotOfficialSearchQueryParams withFeatureCategory(String featureCategory) {
        this.featureCategory = featureCategory;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=featureClass")
    public String featureClass;
    public GetNamesNotOfficialSearchQueryParams withFeatureClass(String featureClass) {
        this.featureClass = featureClass;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=featureType")
    public String featureType;
    public GetNamesNotOfficialSearchQueryParams withFeatureType(String featureType) {
        this.featureType = featureType;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=itemsPerPage")
    public Long itemsPerPage;
    public GetNamesNotOfficialSearchQueryParams withItemsPerPage(Long itemsPerPage) {
        this.itemsPerPage = itemsPerPage;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=name")
    public String name;
    public GetNamesNotOfficialSearchQueryParams withName(String name) {
        this.name = name;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=outputFormat")
    public GetNamesNotOfficialSearchOutputFormatEnum outputFormat;
    public GetNamesNotOfficialSearchQueryParams withOutputFormat(GetNamesNotOfficialSearchOutputFormatEnum outputFormat) {
        this.outputFormat = outputFormat;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=outputSRS")
    public Long outputSRS;
    public GetNamesNotOfficialSearchQueryParams withOutputSrs(Long outputSRS) {
        this.outputSRS = outputSRS;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=outputStyle")
    public GetNamesNotOfficialSearchOutputStyleEnum outputStyle;
    public GetNamesNotOfficialSearchQueryParams withOutputStyle(GetNamesNotOfficialSearchOutputStyleEnum outputStyle) {
        this.outputStyle = outputStyle;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=sortBy")
    public GetNamesNotOfficialSearchSortByEnum sortBy;
    public GetNamesNotOfficialSearchQueryParams withSortBy(GetNamesNotOfficialSearchSortByEnum sortBy) {
        this.sortBy = sortBy;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=startIndex")
    public Long startIndex;
    public GetNamesNotOfficialSearchQueryParams withStartIndex(Long startIndex) {
        this.startIndex = startIndex;
        return this;
    }
}