package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class PrivatecaProjectsLocationsCertificateTemplatesTestIamPermissionsPathParams {
    @SpeakeasyMetadata("pathParam:style=simple,explode=false,name=resource")
    public String resource;
    public PrivatecaProjectsLocationsCertificateTemplatesTestIamPermissionsPathParams withResource(String resource) {
        this.resource = resource;
        return this;
    }
}