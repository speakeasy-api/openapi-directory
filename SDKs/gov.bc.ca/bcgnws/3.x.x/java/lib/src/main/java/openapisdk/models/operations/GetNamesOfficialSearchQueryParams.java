package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class GetNamesOfficialSearchQueryParams {
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=embed")
    public Long embed;
    public GetNamesOfficialSearchQueryParams withEmbed(Long embed) {
        this.embed = embed;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=exactSpelling")
    public Long exactSpelling;
    public GetNamesOfficialSearchQueryParams withExactSpelling(Long exactSpelling) {
        this.exactSpelling = exactSpelling;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=featureCategory")
    public String featureCategory;
    public GetNamesOfficialSearchQueryParams withFeatureCategory(String featureCategory) {
        this.featureCategory = featureCategory;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=featureClass")
    public String featureClass;
    public GetNamesOfficialSearchQueryParams withFeatureClass(String featureClass) {
        this.featureClass = featureClass;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=featureType")
    public String featureType;
    public GetNamesOfficialSearchQueryParams withFeatureType(String featureType) {
        this.featureType = featureType;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=itemsPerPage")
    public Long itemsPerPage;
    public GetNamesOfficialSearchQueryParams withItemsPerPage(Long itemsPerPage) {
        this.itemsPerPage = itemsPerPage;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=name")
    public String name;
    public GetNamesOfficialSearchQueryParams withName(String name) {
        this.name = name;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=outputFormat")
    public GetNamesOfficialSearchOutputFormatEnum outputFormat;
    public GetNamesOfficialSearchQueryParams withOutputFormat(GetNamesOfficialSearchOutputFormatEnum outputFormat) {
        this.outputFormat = outputFormat;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=outputSRS")
    public Long outputSRS;
    public GetNamesOfficialSearchQueryParams withOutputSrs(Long outputSRS) {
        this.outputSRS = outputSRS;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=outputStyle")
    public GetNamesOfficialSearchOutputStyleEnum outputStyle;
    public GetNamesOfficialSearchQueryParams withOutputStyle(GetNamesOfficialSearchOutputStyleEnum outputStyle) {
        this.outputStyle = outputStyle;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=sortBy")
    public GetNamesOfficialSearchSortByEnum sortBy;
    public GetNamesOfficialSearchQueryParams withSortBy(GetNamesOfficialSearchSortByEnum sortBy) {
        this.sortBy = sortBy;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=startIndex")
    public Long startIndex;
    public GetNamesOfficialSearchQueryParams withStartIndex(Long startIndex) {
        this.startIndex = startIndex;
        return this;
    }
}