package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class GetNamesDecisionsRecentQueryParams {
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=days")
    public Long days;
    public GetNamesDecisionsRecentQueryParams withDays(Long days) {
        this.days = days;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=embed")
    public Long embed;
    public GetNamesDecisionsRecentQueryParams withEmbed(Long embed) {
        this.embed = embed;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=featureCategory")
    public String featureCategory;
    public GetNamesDecisionsRecentQueryParams withFeatureCategory(String featureCategory) {
        this.featureCategory = featureCategory;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=featureClass")
    public String featureClass;
    public GetNamesDecisionsRecentQueryParams withFeatureClass(String featureClass) {
        this.featureClass = featureClass;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=featureType")
    public String featureType;
    public GetNamesDecisionsRecentQueryParams withFeatureType(String featureType) {
        this.featureType = featureType;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=itemsPerPage")
    public Long itemsPerPage;
    public GetNamesDecisionsRecentQueryParams withItemsPerPage(Long itemsPerPage) {
        this.itemsPerPage = itemsPerPage;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=outputFormat")
    public GetNamesDecisionsRecentOutputFormatEnum outputFormat;
    public GetNamesDecisionsRecentQueryParams withOutputFormat(GetNamesDecisionsRecentOutputFormatEnum outputFormat) {
        this.outputFormat = outputFormat;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=outputSRS")
    public Long outputSRS;
    public GetNamesDecisionsRecentQueryParams withOutputSrs(Long outputSRS) {
        this.outputSRS = outputSRS;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=outputStyle")
    public GetNamesDecisionsRecentOutputStyleEnum outputStyle;
    public GetNamesDecisionsRecentQueryParams withOutputStyle(GetNamesDecisionsRecentOutputStyleEnum outputStyle) {
        this.outputStyle = outputStyle;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=sortBy")
    public GetNamesDecisionsRecentSortByEnum sortBy;
    public GetNamesDecisionsRecentQueryParams withSortBy(GetNamesDecisionsRecentSortByEnum sortBy) {
        this.sortBy = sortBy;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=startIndex")
    public Long startIndex;
    public GetNamesDecisionsRecentQueryParams withStartIndex(Long startIndex) {
        this.startIndex = startIndex;
        return this;
    }
}