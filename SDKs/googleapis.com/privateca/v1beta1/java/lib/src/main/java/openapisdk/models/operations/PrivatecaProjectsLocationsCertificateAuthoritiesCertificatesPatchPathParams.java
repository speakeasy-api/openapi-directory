package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class PrivatecaProjectsLocationsCertificateAuthoritiesCertificatesPatchPathParams {
    @SpeakeasyMetadata("pathParam:style=simple,explode=false,name=name")
    public String name;
    public PrivatecaProjectsLocationsCertificateAuthoritiesCertificatesPatchPathParams withName(String name) {
        this.name = name;
        return this;
    }
}