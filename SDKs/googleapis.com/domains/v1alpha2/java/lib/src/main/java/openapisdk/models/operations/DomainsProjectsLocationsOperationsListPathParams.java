package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class DomainsProjectsLocationsOperationsListPathParams {
    @SpeakeasyMetadata("pathParam:style=simple,explode=false,name=name")
    public String name;
    public DomainsProjectsLocationsOperationsListPathParams withName(String name) {
        this.name = name;
        return this;
    }
}