package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class PrivatecaProjectsLocationsCaPoolsCertificateAuthoritiesUndeletePathParams {
    @SpeakeasyMetadata("pathParam:style=simple,explode=false,name=name")
    public String name;
    public PrivatecaProjectsLocationsCaPoolsCertificateAuthoritiesUndeletePathParams withName(String name) {
        this.name = name;
        return this;
    }
}