package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class ApigeeregistryProjectsLocationsRuntimeGetIamPolicyPathParams {
    @SpeakeasyMetadata("pathParam:style=simple,explode=false,name=resource")
    public String resource;
    public ApigeeregistryProjectsLocationsRuntimeGetIamPolicyPathParams withResource(String resource) {
        this.resource = resource;
        return this;
    }
}