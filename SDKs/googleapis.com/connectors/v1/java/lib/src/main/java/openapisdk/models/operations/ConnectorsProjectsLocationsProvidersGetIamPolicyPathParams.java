package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class ConnectorsProjectsLocationsProvidersGetIamPolicyPathParams {
    @SpeakeasyMetadata("pathParam:style=simple,explode=false,name=resource")
    public String resource;
    public ConnectorsProjectsLocationsProvidersGetIamPolicyPathParams withResource(String resource) {
        this.resource = resource;
        return this;
    }
}