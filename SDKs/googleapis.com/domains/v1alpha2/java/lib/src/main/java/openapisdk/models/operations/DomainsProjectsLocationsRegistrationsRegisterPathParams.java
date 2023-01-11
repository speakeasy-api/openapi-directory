package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class DomainsProjectsLocationsRegistrationsRegisterPathParams {
    @SpeakeasyMetadata("pathParam:style=simple,explode=false,name=parent")
    public String parent;
    public DomainsProjectsLocationsRegistrationsRegisterPathParams withParent(String parent) {
        this.parent = parent;
        return this;
    }
}