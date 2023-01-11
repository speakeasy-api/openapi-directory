package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class GetSitesWithinOutputFormatQueryParams {
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=bbox")
    public String bbox;
    public GetSitesWithinOutputFormatQueryParams withBbox(String bbox) {
        this.bbox = bbox;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=brief")
    public Boolean brief;
    public GetSitesWithinOutputFormatQueryParams withBrief(Boolean brief) {
        this.brief = brief;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=excludeUnits")
    public Boolean excludeUnits;
    public GetSitesWithinOutputFormatQueryParams withExcludeUnits(Boolean excludeUnits) {
        this.excludeUnits = excludeUnits;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=locationDescriptor")
    public GetSitesWithinOutputFormatLocationDescriptorEnum locationDescriptor;
    public GetSitesWithinOutputFormatQueryParams withLocationDescriptor(GetSitesWithinOutputFormatLocationDescriptorEnum locationDescriptor) {
        this.locationDescriptor = locationDescriptor;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=maxResults")
    public Long maxResults;
    public GetSitesWithinOutputFormatQueryParams withMaxResults(Long maxResults) {
        this.maxResults = maxResults;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=onlyCivic")
    public Boolean onlyCivic;
    public GetSitesWithinOutputFormatQueryParams withOnlyCivic(Boolean onlyCivic) {
        this.onlyCivic = onlyCivic;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=outputSRS")
    public Long outputSRS;
    public GetSitesWithinOutputFormatQueryParams withOutputSrs(Long outputSRS) {
        this.outputSRS = outputSRS;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=setBack")
    public Long setBack;
    public GetSitesWithinOutputFormatQueryParams withSetBack(Long setBack) {
        this.setBack = setBack;
        return this;
    }
}