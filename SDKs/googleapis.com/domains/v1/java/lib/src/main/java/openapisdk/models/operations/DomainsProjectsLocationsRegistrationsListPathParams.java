package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class DomainsProjectsLocationsRegistrationsListPathParams {
    @SpeakeasyMetadata("pathParam:style=simple,explode=false,name=parent")
    public String parent;
    public DomainsProjectsLocationsRegistrationsListPathParams withParent(String parent) {
        this.parent = parent;
        return this;
    }
}