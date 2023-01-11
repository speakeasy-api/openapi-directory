package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class PrivatecaProjectsLocationsCertificateTemplatesSetIamPolicyPathParams {
    @SpeakeasyMetadata("pathParam:style=simple,explode=false,name=resource")
    public String resource;
    public PrivatecaProjectsLocationsCertificateTemplatesSetIamPolicyPathParams withResource(String resource) {
        this.resource = resource;
        return this;
    }
}