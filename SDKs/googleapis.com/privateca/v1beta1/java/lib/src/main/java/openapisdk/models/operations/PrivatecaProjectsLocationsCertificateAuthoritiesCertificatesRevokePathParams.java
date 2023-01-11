package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class PrivatecaProjectsLocationsCertificateAuthoritiesCertificatesRevokePathParams {
    @SpeakeasyMetadata("pathParam:style=simple,explode=false,name=name")
    public String name;
    public PrivatecaProjectsLocationsCertificateAuthoritiesCertificatesRevokePathParams withName(String name) {
        this.name = name;
        return this;
    }
}