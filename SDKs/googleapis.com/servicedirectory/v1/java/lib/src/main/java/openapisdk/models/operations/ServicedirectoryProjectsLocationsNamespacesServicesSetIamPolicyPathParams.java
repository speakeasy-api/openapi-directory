package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class ServicedirectoryProjectsLocationsNamespacesServicesSetIamPolicyPathParams {
    @SpeakeasyMetadata("pathParam:style=simple,explode=false,name=resource")
    public String resource;
    public ServicedirectoryProjectsLocationsNamespacesServicesSetIamPolicyPathParams withResource(String resource) {
        this.resource = resource;
        return this;
    }
}