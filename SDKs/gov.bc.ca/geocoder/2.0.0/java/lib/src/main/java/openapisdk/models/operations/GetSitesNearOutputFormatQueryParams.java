package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class GetSitesNearOutputFormatQueryParams {
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=brief")
    public Boolean brief;
    public GetSitesNearOutputFormatQueryParams withBrief(Boolean brief) {
        this.brief = brief;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=excludeUnits")
    public Boolean excludeUnits;
    public GetSitesNearOutputFormatQueryParams withExcludeUnits(Boolean excludeUnits) {
        this.excludeUnits = excludeUnits;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=locationDescriptor")
    public GetSitesNearOutputFormatLocationDescriptorEnum locationDescriptor;
    public GetSitesNearOutputFormatQueryParams withLocationDescriptor(GetSitesNearOutputFormatLocationDescriptorEnum locationDescriptor) {
        this.locationDescriptor = locationDescriptor;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=maxDistance")
    public Long maxDistance;
    public GetSitesNearOutputFormatQueryParams withMaxDistance(Long maxDistance) {
        this.maxDistance = maxDistance;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=maxResults")
    public Long maxResults;
    public GetSitesNearOutputFormatQueryParams withMaxResults(Long maxResults) {
        this.maxResults = maxResults;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=onlyCivic")
    public Boolean onlyCivic;
    public GetSitesNearOutputFormatQueryParams withOnlyCivic(Boolean onlyCivic) {
        this.onlyCivic = onlyCivic;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=outputSRS")
    public Long outputSRS;
    public GetSitesNearOutputFormatQueryParams withOutputSrs(Long outputSRS) {
        this.outputSRS = outputSRS;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=point")
    public String point;
    public GetSitesNearOutputFormatQueryParams withPoint(String point) {
        this.point = point;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=setBack")
    public Long setBack;
    public GetSitesNearOutputFormatQueryParams withSetBack(Long setBack) {
        this.setBack = setBack;
        return this;
    }
}