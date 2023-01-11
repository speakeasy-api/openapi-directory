package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class DomainsProjectsLocationsRegistrationsTransferPathParams {
    @SpeakeasyMetadata("pathParam:style=simple,explode=false,name=parent")
    public String parent;
    public DomainsProjectsLocationsRegistrationsTransferPathParams withParent(String parent) {
        this.parent = parent;
        return this;
    }
}