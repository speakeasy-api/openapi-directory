package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class GetSitesSiteIdSubsitesOutputFormatQueryParams {
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=brief")
    public Boolean brief;
    public GetSitesSiteIdSubsitesOutputFormatQueryParams withBrief(Boolean brief) {
        this.brief = brief;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=locationDescriptor")
    public GetSitesSiteIdSubsitesOutputFormatLocationDescriptorEnum locationDescriptor;
    public GetSitesSiteIdSubsitesOutputFormatQueryParams withLocationDescriptor(GetSitesSiteIdSubsitesOutputFormatLocationDescriptorEnum locationDescriptor) {
        this.locationDescriptor = locationDescriptor;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=outputSRS")
    public Long outputSRS;
    public GetSitesSiteIdSubsitesOutputFormatQueryParams withOutputSrs(Long outputSRS) {
        this.outputSRS = outputSRS;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=setBack")
    public Long setBack;
    public GetSitesSiteIdSubsitesOutputFormatQueryParams withSetBack(Long setBack) {
        this.setBack = setBack;
        return this;
    }
}