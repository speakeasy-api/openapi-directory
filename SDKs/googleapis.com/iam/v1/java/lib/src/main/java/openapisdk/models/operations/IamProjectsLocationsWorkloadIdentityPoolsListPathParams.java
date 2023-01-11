package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class IamProjectsLocationsWorkloadIdentityPoolsListPathParams {
    @SpeakeasyMetadata("pathParam:style=simple,explode=false,name=parent")
    public String parent;
    public IamProjectsLocationsWorkloadIdentityPoolsListPathParams withParent(String parent) {
        this.parent = parent;
        return this;
    }
}