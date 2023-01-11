package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class DomainsProjectsLocationsRegistrationsPatchPathParams {
    @SpeakeasyMetadata("pathParam:style=simple,explode=false,name=name")
    public String name;
    public DomainsProjectsLocationsRegistrationsPatchPathParams withName(String name) {
        this.name = name;
        return this;
    }
}