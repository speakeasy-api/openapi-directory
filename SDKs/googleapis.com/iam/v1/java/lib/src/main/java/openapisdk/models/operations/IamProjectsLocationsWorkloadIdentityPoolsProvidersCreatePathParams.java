package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class IamProjectsLocationsWorkloadIdentityPoolsProvidersCreatePathParams {
    @SpeakeasyMetadata("pathParam:style=simple,explode=false,name=parent")
    public String parent;
    public IamProjectsLocationsWorkloadIdentityPoolsProvidersCreatePathParams withParent(String parent) {
        this.parent = parent;
        return this;
    }
}