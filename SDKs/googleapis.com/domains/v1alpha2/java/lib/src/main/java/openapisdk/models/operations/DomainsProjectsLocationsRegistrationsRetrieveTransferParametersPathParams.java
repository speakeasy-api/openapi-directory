package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class DomainsProjectsLocationsRegistrationsRetrieveTransferParametersPathParams {
    @SpeakeasyMetadata("pathParam:style=simple,explode=false,name=location")
    public String location;
    public DomainsProjectsLocationsRegistrationsRetrieveTransferParametersPathParams withLocation(String location) {
        this.location = location;
        return this;
    }
}