package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class DomainsProjectsLocationsRegistrationsRetrieveRegisterParametersPathParams {
    @SpeakeasyMetadata("pathParam:style=simple,explode=false,name=location")
    public String location;
    public DomainsProjectsLocationsRegistrationsRetrieveRegisterParametersPathParams withLocation(String location) {
        this.location = location;
        return this;
    }
}