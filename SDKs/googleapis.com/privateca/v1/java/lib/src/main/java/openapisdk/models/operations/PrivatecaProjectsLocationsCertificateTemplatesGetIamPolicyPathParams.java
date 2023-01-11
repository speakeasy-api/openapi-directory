package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class PrivatecaProjectsLocationsCertificateTemplatesGetIamPolicyPathParams {
    @SpeakeasyMetadata("pathParam:style=simple,explode=false,name=resource")
    public String resource;
    public PrivatecaProjectsLocationsCertificateTemplatesGetIamPolicyPathParams withResource(String resource) {
        this.resource = resource;
        return this;
    }
}