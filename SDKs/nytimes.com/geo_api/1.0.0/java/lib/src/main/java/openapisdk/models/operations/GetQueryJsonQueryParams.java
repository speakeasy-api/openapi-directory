package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class GetQueryJsonQueryParams {
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=date_range")
    public String dateRange;
    public GetQueryJsonQueryParams withDateRange(String dateRange) {
        this.dateRange = dateRange;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=elevation")
    public Long elevation;
    public GetQueryJsonQueryParams withElevation(Long elevation) {
        this.elevation = elevation;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=facets")
    public Long facets;
    public GetQueryJsonQueryParams withFacets(Long facets) {
        this.facets = facets;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=filter")
    public String filter;
    public GetQueryJsonQueryParams withFilter(String filter) {
        this.filter = filter;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=latitude")
    public String latitude;
    public GetQueryJsonQueryParams withLatitude(String latitude) {
        this.latitude = latitude;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=limit")
    public Long limit;
    public GetQueryJsonQueryParams withLimit(Long limit) {
        this.limit = limit;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=longitude")
    public String longitude;
    public GetQueryJsonQueryParams withLongitude(String longitude) {
        this.longitude = longitude;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=name")
    public String name;
    public GetQueryJsonQueryParams withName(String name) {
        this.name = name;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=offset")
    public Long offset;
    public GetQueryJsonQueryParams withOffset(Long offset) {
        this.offset = offset;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=query")
    public String query;
    public GetQueryJsonQueryParams withQuery(String query) {
        this.query = query;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=sort")
    public String sort;
    public GetQueryJsonQueryParams withSort(String sort) {
        this.sort = sort;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=sw")
    public String sw;
    public GetQueryJsonQueryParams withSw(String sw) {
        this.sw = sw;
        return this;
    }
}