package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class GetOccupantsWithinOutputFormatQueryParams {
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=bbox")
    public String bbox;
    public GetOccupantsWithinOutputFormatQueryParams withBbox(String bbox) {
        this.bbox = bbox;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=brief")
    public Boolean brief;
    public GetOccupantsWithinOutputFormatQueryParams withBrief(Boolean brief) {
        this.brief = brief;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=locationDescriptor")
    public GetOccupantsWithinOutputFormatLocationDescriptorEnum locationDescriptor;
    public GetOccupantsWithinOutputFormatQueryParams withLocationDescriptor(GetOccupantsWithinOutputFormatLocationDescriptorEnum locationDescriptor) {
        this.locationDescriptor = locationDescriptor;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=maxResults")
    public Long maxResults;
    public GetOccupantsWithinOutputFormatQueryParams withMaxResults(Long maxResults) {
        this.maxResults = maxResults;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=outputSRS")
    public Long outputSRS;
    public GetOccupantsWithinOutputFormatQueryParams withOutputSrs(Long outputSRS) {
        this.outputSRS = outputSRS;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=setBack")
    public Long setBack;
    public GetOccupantsWithinOutputFormatQueryParams withSetBack(Long setBack) {
        this.setBack = setBack;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=tags")
    public String tags;
    public GetOccupantsWithinOutputFormatQueryParams withTags(String tags) {
        this.tags = tags;
        return this;
    }
}