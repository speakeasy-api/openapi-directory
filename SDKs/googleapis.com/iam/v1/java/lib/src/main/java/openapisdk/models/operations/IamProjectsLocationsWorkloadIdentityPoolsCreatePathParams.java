package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class IamProjectsLocationsWorkloadIdentityPoolsCreatePathParams {
    @SpeakeasyMetadata("pathParam:style=simple,explode=false,name=parent")
    public String parent;
    public IamProjectsLocationsWorkloadIdentityPoolsCreatePathParams withParent(String parent) {
        this.parent = parent;
        return this;
    }
}