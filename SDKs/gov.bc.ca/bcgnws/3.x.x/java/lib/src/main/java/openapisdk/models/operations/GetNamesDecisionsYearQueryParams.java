package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class GetNamesDecisionsYearQueryParams {
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=embed")
    public Long embed;
    public GetNamesDecisionsYearQueryParams withEmbed(Long embed) {
        this.embed = embed;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=featureCategory")
    public String featureCategory;
    public GetNamesDecisionsYearQueryParams withFeatureCategory(String featureCategory) {
        this.featureCategory = featureCategory;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=featureClass")
    public String featureClass;
    public GetNamesDecisionsYearQueryParams withFeatureClass(String featureClass) {
        this.featureClass = featureClass;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=featureType")
    public String featureType;
    public GetNamesDecisionsYearQueryParams withFeatureType(String featureType) {
        this.featureType = featureType;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=itemsPerPage")
    public Long itemsPerPage;
    public GetNamesDecisionsYearQueryParams withItemsPerPage(Long itemsPerPage) {
        this.itemsPerPage = itemsPerPage;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=outputFormat")
    public GetNamesDecisionsYearOutputFormatEnum outputFormat;
    public GetNamesDecisionsYearQueryParams withOutputFormat(GetNamesDecisionsYearOutputFormatEnum outputFormat) {
        this.outputFormat = outputFormat;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=outputSRS")
    public Long outputSRS;
    public GetNamesDecisionsYearQueryParams withOutputSrs(Long outputSRS) {
        this.outputSRS = outputSRS;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=outputStyle")
    public GetNamesDecisionsYearOutputStyleEnum outputStyle;
    public GetNamesDecisionsYearQueryParams withOutputStyle(GetNamesDecisionsYearOutputStyleEnum outputStyle) {
        this.outputStyle = outputStyle;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=sortBy")
    public GetNamesDecisionsYearSortByEnum sortBy;
    public GetNamesDecisionsYearQueryParams withSortBy(GetNamesDecisionsYearSortByEnum sortBy) {
        this.sortBy = sortBy;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=startIndex")
    public Long startIndex;
    public GetNamesDecisionsYearQueryParams withStartIndex(Long startIndex) {
        this.startIndex = startIndex;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=year")
    public Long year;
    public GetNamesDecisionsYearQueryParams withYear(Long year) {
        this.year = year;
        return this;
    }
}