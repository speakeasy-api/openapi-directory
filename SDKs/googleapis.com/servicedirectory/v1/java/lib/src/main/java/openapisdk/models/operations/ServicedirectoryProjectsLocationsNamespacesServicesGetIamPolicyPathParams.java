package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class ServicedirectoryProjectsLocationsNamespacesServicesGetIamPolicyPathParams {
    @SpeakeasyMetadata("pathParam:style=simple,explode=false,name=resource")
    public String resource;
    public ServicedirectoryProjectsLocationsNamespacesServicesGetIamPolicyPathParams withResource(String resource) {
        this.resource = resource;
        return this;
    }
}