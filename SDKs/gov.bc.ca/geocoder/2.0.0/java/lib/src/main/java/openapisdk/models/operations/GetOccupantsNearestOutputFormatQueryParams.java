package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class GetOccupantsNearestOutputFormatQueryParams {
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=brief")
    public Boolean brief;
    public GetOccupantsNearestOutputFormatQueryParams withBrief(Boolean brief) {
        this.brief = brief;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=locationDescriptor")
    public GetOccupantsNearestOutputFormatLocationDescriptorEnum locationDescriptor;
    public GetOccupantsNearestOutputFormatQueryParams withLocationDescriptor(GetOccupantsNearestOutputFormatLocationDescriptorEnum locationDescriptor) {
        this.locationDescriptor = locationDescriptor;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=maxDistance")
    public Long maxDistance;
    public GetOccupantsNearestOutputFormatQueryParams withMaxDistance(Long maxDistance) {
        this.maxDistance = maxDistance;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=outputSRS")
    public Long outputSRS;
    public GetOccupantsNearestOutputFormatQueryParams withOutputSrs(Long outputSRS) {
        this.outputSRS = outputSRS;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=point")
    public String point;
    public GetOccupantsNearestOutputFormatQueryParams withPoint(String point) {
        this.point = point;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=setBack")
    public Long setBack;
    public GetOccupantsNearestOutputFormatQueryParams withSetBack(Long setBack) {
        this.setBack = setBack;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=tags")
    public String tags;
    public GetOccupantsNearestOutputFormatQueryParams withTags(String tags) {
        this.tags = tags;
        return this;
    }
}