package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class GetSitesNearestOutputFormatQueryParams {
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=brief")
    public Boolean brief;
    public GetSitesNearestOutputFormatQueryParams withBrief(Boolean brief) {
        this.brief = brief;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=excludeUnits")
    public Boolean excludeUnits;
    public GetSitesNearestOutputFormatQueryParams withExcludeUnits(Boolean excludeUnits) {
        this.excludeUnits = excludeUnits;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=locationDescriptor")
    public GetSitesNearestOutputFormatLocationDescriptorEnum locationDescriptor;
    public GetSitesNearestOutputFormatQueryParams withLocationDescriptor(GetSitesNearestOutputFormatLocationDescriptorEnum locationDescriptor) {
        this.locationDescriptor = locationDescriptor;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=maxDistance")
    public Long maxDistance;
    public GetSitesNearestOutputFormatQueryParams withMaxDistance(Long maxDistance) {
        this.maxDistance = maxDistance;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=onlyCivic")
    public Boolean onlyCivic;
    public GetSitesNearestOutputFormatQueryParams withOnlyCivic(Boolean onlyCivic) {
        this.onlyCivic = onlyCivic;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=outputSRS")
    public Long outputSRS;
    public GetSitesNearestOutputFormatQueryParams withOutputSrs(Long outputSRS) {
        this.outputSRS = outputSRS;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=point")
    public String point;
    public GetSitesNearestOutputFormatQueryParams withPoint(String point) {
        this.point = point;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=setBack")
    public Long setBack;
    public GetSitesNearestOutputFormatQueryParams withSetBack(Long setBack) {
        this.setBack = setBack;
        return this;
    }
}