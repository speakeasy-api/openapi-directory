package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class PrivatecaProjectsLocationsCertificateAuthoritiesListPathParams {
    @SpeakeasyMetadata("pathParam:style=simple,explode=false,name=parent")
    public String parent;
    public PrivatecaProjectsLocationsCertificateAuthoritiesListPathParams withParent(String parent) {
        this.parent = parent;
        return this;
    }
}