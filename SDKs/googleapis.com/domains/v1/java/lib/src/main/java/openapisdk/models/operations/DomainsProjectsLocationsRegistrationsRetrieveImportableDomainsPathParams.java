package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class DomainsProjectsLocationsRegistrationsRetrieveImportableDomainsPathParams {
    @SpeakeasyMetadata("pathParam:style=simple,explode=false,name=location")
    public String location;
    public DomainsProjectsLocationsRegistrationsRetrieveImportableDomainsPathParams withLocation(String location) {
        this.location = location;
        return this;
    }
}