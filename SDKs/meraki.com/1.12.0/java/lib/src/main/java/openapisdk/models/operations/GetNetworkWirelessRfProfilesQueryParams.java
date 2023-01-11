package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class GetNetworkWirelessRfProfilesQueryParams {
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=includeTemplateProfiles")
    public Boolean includeTemplateProfiles;
    public GetNetworkWirelessRfProfilesQueryParams withIncludeTemplateProfiles(Boolean includeTemplateProfiles) {
        this.includeTemplateProfiles = includeTemplateProfiles;
        return this;
    }
}