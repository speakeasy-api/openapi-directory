package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class GetNamesNearQueryParams {
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=distance")
    public String distance;
    public GetNamesNearQueryParams withDistance(String distance) {
        this.distance = distance;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=embed")
    public Long embed;
    public GetNamesNearQueryParams withEmbed(Long embed) {
        this.embed = embed;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=featureCategory")
    public String featureCategory;
    public GetNamesNearQueryParams withFeatureCategory(String featureCategory) {
        this.featureCategory = featureCategory;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=featureClass")
    public String featureClass;
    public GetNamesNearQueryParams withFeatureClass(String featureClass) {
        this.featureClass = featureClass;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=featurePoint")
    public String featurePoint;
    public GetNamesNearQueryParams withFeaturePoint(String featurePoint) {
        this.featurePoint = featurePoint;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=featureType")
    public String featureType;
    public GetNamesNearQueryParams withFeatureType(String featureType) {
        this.featureType = featureType;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=itemsPerPage")
    public Long itemsPerPage;
    public GetNamesNearQueryParams withItemsPerPage(Long itemsPerPage) {
        this.itemsPerPage = itemsPerPage;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=outputFormat")
    public GetNamesNearOutputFormatEnum outputFormat;
    public GetNamesNearQueryParams withOutputFormat(GetNamesNearOutputFormatEnum outputFormat) {
        this.outputFormat = outputFormat;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=outputSRS")
    public Long outputSRS;
    public GetNamesNearQueryParams withOutputSrs(Long outputSRS) {
        this.outputSRS = outputSRS;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=outputStyle")
    public GetNamesNearOutputStyleEnum outputStyle;
    public GetNamesNearQueryParams withOutputStyle(GetNamesNearOutputStyleEnum outputStyle) {
        this.outputStyle = outputStyle;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=sortBy")
    public GetNamesNearSortByEnum sortBy;
    public GetNamesNearQueryParams withSortBy(GetNamesNearSortByEnum sortBy) {
        this.sortBy = sortBy;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=startIndex")
    public Long startIndex;
    public GetNamesNearQueryParams withStartIndex(Long startIndex) {
        this.startIndex = startIndex;
        return this;
    }
}