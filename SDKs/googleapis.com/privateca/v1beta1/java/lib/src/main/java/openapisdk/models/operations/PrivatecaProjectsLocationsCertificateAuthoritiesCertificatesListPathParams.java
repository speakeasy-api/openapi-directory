package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class PrivatecaProjectsLocationsCertificateAuthoritiesCertificatesListPathParams {
    @SpeakeasyMetadata("pathParam:style=simple,explode=false,name=parent")
    public String parent;
    public PrivatecaProjectsLocationsCertificateAuthoritiesCertificatesListPathParams withParent(String parent) {
        this.parent = parent;
        return this;
    }
}