package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class ApigeeregistryProjectsLocationsRuntimeSetIamPolicyPathParams {
    @SpeakeasyMetadata("pathParam:style=simple,explode=false,name=resource")
    public String resource;
    public ApigeeregistryProjectsLocationsRuntimeSetIamPolicyPathParams withResource(String resource) {
        this.resource = resource;
        return this;
    }
}