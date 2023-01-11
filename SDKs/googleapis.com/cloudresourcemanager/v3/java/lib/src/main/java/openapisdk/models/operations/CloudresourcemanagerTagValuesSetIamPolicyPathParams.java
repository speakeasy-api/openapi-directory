package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class CloudresourcemanagerTagValuesSetIamPolicyPathParams {
    @SpeakeasyMetadata("pathParam:style=simple,explode=false,name=resource")
    public String resource;
    public CloudresourcemanagerTagValuesSetIamPolicyPathParams withResource(String resource) {
        this.resource = resource;
        return this;
    }
}