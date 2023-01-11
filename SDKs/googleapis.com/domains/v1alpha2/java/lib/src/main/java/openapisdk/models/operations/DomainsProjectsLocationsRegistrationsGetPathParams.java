package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class DomainsProjectsLocationsRegistrationsGetPathParams {
    @SpeakeasyMetadata("pathParam:style=simple,explode=false,name=name")
    public String name;
    public DomainsProjectsLocationsRegistrationsGetPathParams withName(String name) {
        this.name = name;
        return this;
    }
}