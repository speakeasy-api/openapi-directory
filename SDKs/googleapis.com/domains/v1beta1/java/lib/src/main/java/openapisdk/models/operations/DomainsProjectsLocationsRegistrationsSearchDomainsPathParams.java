package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class DomainsProjectsLocationsRegistrationsSearchDomainsPathParams {
    @SpeakeasyMetadata("pathParam:style=simple,explode=false,name=location")
    public String location;
    public DomainsProjectsLocationsRegistrationsSearchDomainsPathParams withLocation(String location) {
        this.location = location;
        return this;
    }
}